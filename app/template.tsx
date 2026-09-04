export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main id="main" className="page-enter">
      {children}
    </main>
  );
}
