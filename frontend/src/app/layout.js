import '../../public/globalStyles.css'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>DollarZ</title>
      </head>
      <body>
        {children}
      </body>
    </html>)
}
