import {Metadata} from "next";
import "./index.css"
export const metadata: Metadata = {
    title: 'Personal Financial Outlook',
    description: 'Personalized financial outlook on the stock market',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
