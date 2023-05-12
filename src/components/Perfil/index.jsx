import './perfil.css'

const Perfil = () => {
    const usuario = {
        nome: 'Higor Cruz',
        avatar: 'https://github.com/higorrsc.png'
    }
    return (
        <div>
            <img className='perfil-avatar' src={usuario.avatar} alt="" />
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;