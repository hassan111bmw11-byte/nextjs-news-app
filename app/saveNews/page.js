import StarBorderIcon from '@mui/icons-material/StarBorder';
export default function Page() {
    return(
         <div className="flex justify-center bg-blue-800 w-screen">
      <div id="Tesla" className="grid ml-8 mt-12 p-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 justify-center items-center gap-4">

          <div
            className="w-100 mt-8 border h-fit pb-4 border-white/70 hover:bg-zinc-300 overflow-hidden flex rounded-4xl bg-white/50 flex-col justify-center items-center shadow-2xl"
          >
            {/* تأكد من إضافة الدومين الخاص بالصور في next.config.js إذا كانت الصور خارجية */}
            <div className="relative w-full h-48">
              {/* <img
  
                alt="news"
                className="w-full h-full object-cover"
              /> */}
            </div>

            <div className="flex flex-col p-2">
              <p className="text-xs text-gray-500">
              </p>
              <h2 className="w-80 text-zinc-950 font-bold overflow-hidden h-20">
              </h2>
              <h3 className="truncate w-80 text-sm text-gray-600">
              </h3>
            </div>
            <div className="flex gap-2">
              <a  target="_blank" rel="noopener noreferrer">
                <button className="hover:bg-blue-800 bg-blue-700 w-60 rounded-2xl text-amber-50 h-12">
                  Read More
                </button>
              </a>
              <button className="hover:bg-blue-800 bg-blue-700  w-15 rounded-2xl text-amber-50 h-12">
                <StarBorderIcon />
              </button>
            </div>
          </div>
      </div>
    </div>
    )
}
