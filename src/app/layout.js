import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsApp_Icons from "@/components/WhatsApp_Icons";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "NoLimitBikers - Motorrijschool",
    template: "%s | NoLimitBikers - Motorrijschool",
  },
  description: "NoLimitBikers is jouw betrouwbare motorrijschool in Rotterdam. Wij bieden hoogwaardige motorrijlessen, deskundige instructeurs en flexibele lespakketten. Of je nu een beginner bent of gevorderd, leer veilig en met vertrouwen rijden. Boek vandaag je motorrijles en behaal je rijbewijs met succes bij NoLimitBikers!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q477YD7MHF"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q477YD7MHF');
            `,
          }}
        />

        {/* Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-991894060"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-991894060');

              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) !== 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-991894060/g9GjCO7JxNgaEKy0_NgD',
                  'value': 1.0,
                  'currency': 'EUR',
                  'event_callback': callback
                });
                return false;
              }
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <WhatsApp_Icons />
        <Footer />
      </body>
    </html>
  );
}
