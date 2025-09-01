//importamos los estilos del global.css dentro de ui
import './ui/global.css';
//importamos la letra
import {montserrat} from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="bg-gray-100 py-4 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
