import '../../public/globalStyles.css'
import { Button } from '@rewind-ui/core';

export default function Layout({ children }) {
  return (
      <html lang="en">
      <head>
        <title>DollarZ</title>
      </head>
      <body>
        <Button>Click Me</Button>
        {children}
      </body>
    </html>
    )
}
