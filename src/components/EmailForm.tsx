import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { postJSON } from '@/lib/api';

type FormState = 'idle' | 'loading' | 'success' | 'already' | 'error' | 'ratelimit';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const lastSubmitRef = useRef<number>(0);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypotRef.current?.value) {
      setFormState('success');
      return;
    }

    // Rate limiting (5 seconds)
    const now = Date.now();
    if (now - lastSubmitRef.current < 5000) {
      setFormState('ratelimit');
      return;
    }

    const trimmedEmail = email.trim().toLowerCase();

    if (!validateEmail(trimmedEmail)) {
      setFormState('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setFormState('loading');
    lastSubmitRef.current = now;

    try {
      const { status } = await postJSON('/api/subscribe', {
        email: trimmedEmail,
        hostname: window.location.hostname,
        referrer: document.referrer || null,
      });

      if (status === 200) {
        setFormState('already');
        return;
      }
      if (status !== 201) {
        console.error('Submission error: HTTP', status);
        setFormState('error');
        setErrorMessage(status === 422 ? 'Please enter a valid email address.' : 'Something went wrong. Please try again.');
        return;
      }

      // The server sends the new-signup notification itself.
      setFormState('success');
      setEmail('');
    } catch (err) {
      console.error('Unexpected error:', err);
      setFormState('error');
      setErrorMessage('Connection failed. Please try again.');
    }
  };

  const renderMessage = () => {
    switch (formState) {
      case 'success':
        return <p className="text-primary animate-glow mt-4">You're on the list.</p>;
      case 'already':
        return <p className="text-primary/80 mt-4">You're already on the list.</p>;
      case 'ratelimit':
        return <p className="text-destructive mt-4">Please wait a moment before trying again.</p>;
      case 'error':
        return <p className="text-destructive mt-4">{errorMessage}</p>;
      default:
        return null;
    }
  };

  const isDisabled = formState === 'loading' || formState === 'success';

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      {/* Honeypot field - hidden from users */}
      <input
        ref={honeypotRef}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] opacity-0 h-0 w-0"
        aria-hidden="true"
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isDisabled}
          className="flex-1"
          aria-label="Email address"
          required
        />
        <Button
          type="submit"
          variant="matrix"
          disabled={isDisabled}
          className="min-w-[120px]"
        >
          {formState === 'loading' ? (
            <span className="animate-pulse">Sending...</span>
          ) : (
            'Tell me more'
          )}
        </Button>
      </div>

      {renderMessage()}
    </form>
  );
};

export default EmailForm;
