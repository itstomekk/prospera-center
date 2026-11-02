import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { postJSON } from '@/lib/api';
import MatrixRain from '@/components/MatrixRain';

interface EmailEntry {
  id: string;
  email: string;
  created_at: string;
}

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [emails, setEmails] = useState<EmailEntry[]>([]);
  const [fetchingEmails, setFetchingEmails] = useState(false);

  useEffect(() => {
    document.title = 'Admin Access';
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const { status, data } = await postJSON<{ success?: boolean; token?: string }>('/api/admin', {
        password,
        action: 'verify',
      });

      if (status >= 500) {
        throw new Error('Authentication failed');
      }

      if (data?.success && data.token) {
        setIsAuthenticated(true);
        sessionStorage.setItem('admin_session', data.token);
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchEmails = async () => {
    setFetchingEmails(true);
    try {
      const token = sessionStorage.getItem('admin_session');
      const { status, data } = await postJSON<{ emails?: EmailEntry[] }>('/api/admin', { action: 'list', token });

      if (status !== 200) throw new Error(`HTTP ${status}`);

      if (data?.emails) {
        setEmails(data.emails);
      }
    } catch (err) {
      console.error('Failed to fetch emails:', err);
      setError('Failed to load emails');
    } finally {
      setFetchingEmails(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchEmails();
    }
  }, [isAuthenticated]);

  const exportCSV = () => {
    if (emails.length === 0) return;

    const csvContent = [
      ['Email', 'Submitted At'],
      ...emails.map((e) => [e.email, new Date(e.created_at).toISOString()]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `emails_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_session');
    setIsAuthenticated(false);
    setEmails([]);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <>
        <MatrixRain />

        <main className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="w-full max-w-sm space-y-6">
            <h1 className="text-2xl font-mono text-primary text-center animate-glow">
              Admin Access
            </h1>

            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                autoFocus
              />
              <Button
                type="submit"
                variant="matrix"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? 'Verifying...' : 'Access'}
              </Button>
            </form>

            {error && (
              <p className="text-destructive text-sm text-center">{error}</p>
            )}
          </div>

          <div className="scanlines" aria-hidden="true" />
        </main>
      </>
    );
  }

  return (
    <>
      <MatrixRain />

      <main className="relative z-10 min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-2xl font-mono text-primary animate-glow">
              Collected Emails
            </h1>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={fetchEmails}
                disabled={fetchingEmails}
              >
                {fetchingEmails ? 'Loading...' : 'Refresh'}
              </Button>
              <Button
                variant="matrix"
                onClick={exportCSV}
                disabled={emails.length === 0}
              >
                Export CSV
              </Button>
              <Button variant="ghost" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </header>

          {error && (
            <p className="text-destructive text-sm">{error}</p>
          )}

          <div className="border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full font-mono text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left px-4 py-3 text-muted-foreground">#</th>
                    <th className="text-left px-4 py-3 text-muted-foreground">Email</th>
                    <th className="text-left px-4 py-3 text-muted-foreground">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {emails.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-4 py-8 text-center text-muted-foreground">
                        {fetchingEmails ? 'Loading...' : 'No emails collected yet.'}
                      </td>
                    </tr>
                  ) : (
                    emails.map((entry, index) => (
                      <tr key={entry.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 text-muted-foreground">{index + 1}</td>
                        <td className="px-4 py-3 text-foreground">{entry.email}</td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {new Date(entry.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            Total: {emails.length} email{emails.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="scanlines" aria-hidden="true" />
      </main>
    </>
  );
};

export default Admin;
