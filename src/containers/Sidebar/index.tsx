import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Higor Cruz</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        higorrsc
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Analista de Sistemas
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
