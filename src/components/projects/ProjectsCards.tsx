import type { Projects } from '../../types'
import {
    Html5Original,
    Css3Original,
    ReactOriginal,
    TypescriptOriginal,
    TailwindcssOriginal,
    NodejsOriginal,
    JavascriptOriginal,
    VitejsOriginal,
    ExpressOriginal,
    MysqlOriginal,
} from 'devicons-react'

// mapa de string → componente de ícone
const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
    html: Html5Original,
    css: Css3Original,
    react: ReactOriginal,
    javascript:JavascriptOriginal,
    typescript: TypescriptOriginal,
    tailwind: TailwindcssOriginal,
    vite:VitejsOriginal,
    nodejs: NodejsOriginal,
    express:ExpressOriginal,
    sql:MysqlOriginal
}
export function ProjectCards({id, image, name, description, stack,status, liveUrl, githubUrl }: Projects) {
    return (
        <div className='w-[90%] h-auto border border-gray-500 rounded-2xl'>
            <div className="w-[100%] h-[200px] border-b border-gray-500"><img className='w-full h-full rounded-t-2xl' src={image} alt="" /></div>
            <div className='flex flex-col gap-3 p-3'>
                <div>{id}- {name}</div>
                <div>{description}</div>
                <div>Status: {status}</div>
                <div className="flex gap-2 flex-wrap">
                    {stack.map((item) => {
                        const Icon = iconMap[item.icon]
                        return (
                            <div key={item.name} className="flex items-center gap-1">
                                {Icon && <Icon size={16} />}
                                <span className="text-xs font-mono text-[var(--color-muted)]">{item.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='flex gap-3 p-3 justify-center'>
                <a href={liveUrl} target="_blank" className="btn-outline">
                    <span>Live</span>
                </a>
                <a href={githubUrl} target="_blank" className="btn-outline">
                    <span>GitHub</span>
                </a>
            </div>
        </div>
    )
}