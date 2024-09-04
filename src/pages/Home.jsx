import Menu from "../Components/Menu";

export default function Home(){
  return(
    <div className="">
        <h1 className="font-bold text-3xl">Home</h1>
        <Menu/>
        <div className="flex justify-center items-center">
        <div className="w-full flex justify-center items-center bg-blue-800 p-6">
          <div className="bg-blue-500 w-96 h-80 p-4">
            <p className="flex justify-center font-bold mb-4">Home</p>
            <p className="font-semibold">Esta é a home!</p>
          </div>
        </div>
      </div>
    </div>
  )
}