import { Mail, MapPin, } from 'lucide-react'
import { GithubOriginal, LinkedinOriginal } from 'devicons-react'
export function ContactInformation() {
    return (
        <div className="w-[100%] p-5 mt-4 flex flex-col gap-3">
            <div>
                <h1 className=' text-[var(--color-white)] text-[20px]'>Contact Information</h1>
                <p className='text-[14px] mt-[10px]'>Fill up the form and I'll get back to you as soon as possible.</p>
            </div>
            <div className=' flex flex-col gap-5'>
                <div className="flex items-center mt-[30px] gap-2 leading-none">
                    <div><Mail size={20} /></div>
                    <div>
                        <div className='text-[14px]'>Email</div>
                        <div className='text-[12px] text-[var(--color-white)]'>luizreisneves@outlook.com</div>
                    </div>
                </div>
                <div className="flex items-center gap-2 leading-none">
                    <div><MapPin size={20} /></div>
                    <div>
                        <div className='text-[14px]' >Location</div>
                        <div className='text-[12px] text-[var(--color-white)]'>Brazil</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-[var(--color-white)] text-[20px] mt-[30px]'>Connect with me</div>
                <div className='flex gap-3'>
                    <a href="" className="brightness-0 invert">
                        <GithubOriginal size={25} />
                    </a>
                    <a href=""><LinkedinOriginal size={25} /></a>
                    <a href=""><div><Mail size={25} color="var(--color-white)" /></div></a>
                </div>
            </div>
        </div>
    )
}