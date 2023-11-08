import NavSideBar from '../../components/NavSideBar'
import '../../public/globalStyles.css'

export default function Layout({ children }) {
  return (
      <html lang="en">
      <head>
        <title>DollarZ</title>
      </head>
      <body>
        <div className="relative flex flex-row w-full h-full min-h-[35rem]">
          <NavSideBar/>
        
        

        <div className="w-full h-full p-8">
          {children}
        </div>

        <div className="flex sticky bottom-0 items-center bg-white w-full min-h-[4rem] px-8">
        </div>
        </div>
      </body>
    </html>
    )
}
