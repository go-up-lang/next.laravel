import Header from '@/app/(app)/Header'

export const metadata = {
    title: 'Laravel - Write',
}

const Write = () => {
    return (
        <>
            <Header title="Write" />
            <div className='p-5'>
                <div className='text-3xl mb-5'> 글 작성하기</div>
                <form>
                <input className='w-full rounded h-24 mb-5' type='text' id='note' name='note'/>
                <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">글작성</button>
                </form>
            </div>
        </>
    )
}

export default Write