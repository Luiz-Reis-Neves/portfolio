// Import por ícone — o import pela raiz ('devicons-react') carrega todos os ícones (~10 MB)
import Html5Original from 'devicons-react/icons/Html5Original'
import Css3Original from 'devicons-react/icons/Css3Original'
import ReactOriginal from 'devicons-react/icons/ReactOriginal'
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal'
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal'
import NodejsOriginal from 'devicons-react/icons/NodejsOriginal'
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal'
import VitejsOriginal from 'devicons-react/icons/VitejsOriginal'
import ExpressOriginal from 'devicons-react/icons/ExpressOriginal'
import MysqlOriginal from 'devicons-react/icons/MysqlOriginal'

// Mapa de string → componente de ícone da stack (chave usada em data/index.ts)
export const stackIcons: Record<string, React.ComponentType<React.SVGProps<SVGElement> & { size?: number }>> = {
    html: Html5Original,
    css: Css3Original,
    react: ReactOriginal,
    javascript: JavascriptOriginal,
    typescript: TypescriptOriginal,
    tailwind: TailwindcssOriginal,
    vite: VitejsOriginal,
    nodejs: NodejsOriginal,
    express: ExpressOriginal,
    sql: MysqlOriginal
}
