import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_67euobf'
const TEMPLATE_ID = 'template_rf6lxq7'
const PUBLIC_KEY = 'eU4iqSrMDh1ADLk1i'

export function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null)
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formRef.current) return

        setSending(true)
        setError(false)

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            setSent(true)
            formRef.current.reset()
        } catch {
            setError(true)
        } finally {
            setSending(false)
        }
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="w-[100%] flex flex-col gap-4 mt-[45px]">

            {/* Nome e Email lado a lado */}
            <div className="flex gap-4">
                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-[var(--color-muted)] font-mono text-xs uppercase tracking-widest">Your Name</label>
                    <input
                        name="from_name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="bg-black/30 border border-[var(--color-border)] rounded-lg px-4 py-3 font-mono text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-green)] transition-colors"
                    />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                    <label className="text-[var(--color-muted)] font-mono text-xs uppercase tracking-widest">Your Email</label>
                    <input
                        name="from_email"
                        type="email"
                        required
                        placeholder="john@email.com"
                        className="bg-black/30 border border-[var(--color-border)] rounded-lg px-4 py-3 font-mono text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-green)] transition-colors"
                    />
                </div>
            </div>

            {/* Assunto */}
            <div className="flex flex-col gap-1">
                <label className="text-[var(--color-muted)] font-mono text-xs uppercase tracking-widest">Subject</label>
                <input
                    name="subject"
                    type="text"
                    required
                    placeholder="How can I help you?"
                    className="bg-black/30 border border-[var(--color-border)] rounded-lg px-4 py-3 font-mono text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-green)] transition-colors"
                />
            </div>

            {/* Mensagem */}
            <div className="flex flex-col gap-1">
                <label className="text-[var(--color-muted)] font-mono text-xs uppercase tracking-widest">Message</label>
                <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Your message here..."
                    className="bg-black/30 border border-[var(--color-border)] rounded-lg px-4 py-3 font-mono text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-green)] transition-colors resize-none"
                />
            </div>

            {/* Botão de envio */}
            <button
                type="submit"
                disabled={sending}
                className="btn-fill w-full mt-2"
            >
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
            </button>

            {/* Feedback */}
            {sent && <p className="text-[var(--color-green)] font-mono text-sm text-center">Message sent successfully!</p>}
            {error && <p className="text-red-400 font-mono text-sm text-center">Something went wrong. Try again.</p>}
            <div className='w-[100px] h-[60px] sm:hidden lg:hidden'></div>
        </form>
    )
}