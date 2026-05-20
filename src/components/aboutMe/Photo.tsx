import perfil from '../../assets/img/perfil.png'
export function Photo(){
    return(
        <div className="w-[40%] h-screen flex justify-center items-center">
            <img className='w-[80%] h-[90%] rounded-2xl photo-glow' src={perfil} alt="perfil" />
        </div>
    )
}