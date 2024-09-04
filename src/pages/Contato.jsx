import Menu from "../Components/Menu";

export default function Contato(){
  return(
    <div className="">
      <h1 className="font-bold text-3xl w-full">Contato</h1>
      <Menu/>
      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center items-center bg-blue-800 p-6">
          <div className="bg-blue-500 w-96 h-80 p-4">
            <p className="flex justify-center font-bold mb-4">Contatos:</p>
            <div className="flex flex-col space-y-4">
              <p className="font-semibold w-full">Email: aleatorio@email.com</p>
              <p className="font-semibold w-full text-justify">Numero: (11)99999-9999</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}