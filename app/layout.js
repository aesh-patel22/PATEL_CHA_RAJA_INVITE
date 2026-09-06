import './globals.css';

export const metadata = {
  title: 'Patel Cha Raja | Ganpati Invitation',
  description: 'A heartfelt invitation from the Patel Family for Ganpati celebrations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
