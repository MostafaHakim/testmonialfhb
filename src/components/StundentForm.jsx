
const StudentForm = ({ stdNameHdl, stdGpaHdl, stdRollHdl, stdName, stdGpa, stdRoll }) => {
    return (
        <>
            <form>
                <div className='flex flex-col m-8'>
                    <label htmlFor="stdName">Full Name</label>
                    <input type="text" id='stdName' className='bg-white p-2 focus:outline-none rounded-md' value={stdName} onChange={stdNameHdl} />
                </div>
                <div className='flex flex-col m-8'>
                    <label htmlFor="gpa">GPA</label>
                    <input type="text" id='gpa' className='bg-white p-2 focus:outline-none rounded-md' value={stdGpa} onChange={stdGpaHdl} />
                </div>
                <div className='flex flex-col m-8'>
                    <label htmlFor="roll">Roll No</label>
                    <input type="text" id='roll' className='bg-white p-2 focus:outline-none rounded-md' value={stdRoll} onChange={stdRollHdl} />
                </div>
            </form>
        </>
    );
}

export default StudentForm;