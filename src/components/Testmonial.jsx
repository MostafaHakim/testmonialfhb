import { Watermark } from "antd";
const Testmonial = ({ stdName, stdGpa, stdRoll }) => {
    return (
        <Watermark content={"FAZLUL HAQUE BIDHYA NIKETON"} rotate={-22} gap={[50, 50]} offset={[10, 10]} className="flex items-center justify-center">
            <div className="w-[1132px] h-[792px] bg-white m-auto">
                <div className="w-full h-full  bg-gradient-to-b from-blue-400 to-green-400 dark:to-gray-800 p-2">
                    <div className=" flex flex-col items-center justify-start bg-gradient-to-b from-blue-300 to-orange-100 border-2 border-white w-full h-full">
                        <div className="flex flex-col items-center justify-center mt-8">
                            <div>
                                <h1 className="text-6xl font-poppinsBold">FAZLUL HAQUE BIDHYANIKETON</h1>
                            </div>
                            <span className="text-xl mt-2">205 Ashkona, Medical Road, Dokkhinkhan, Dhaka 1230</span>
                        </div>
                        <div>
                            <p className="text-4xl font-testmonialfont px-4 py-2 mt-8 bg-white rounded-2xl border-4 border-blue-900 border-double">TESTIMONIAL</p>
                        </div>
                        <div>
                            <p className="font-certificateOne p-8 text-justify text-2xl">{stdName} dolor sit amet consectetur,{stdGpa} adipisicing elit. Culpa dolorem {stdRoll}quaerat, dicta quis architecto explicabo odio labore ratione deserunt molestias in exercitationem nobis quod nisi quibusdam iure quam dolorum. Sit, qui assumenda nobis illum eos, facere impedit nesciunt consequatur vitae saepe, explicabo doloribus iure! Repellat tempora dignissimos ut tenetur illum voluptatum sint, cupiditate quod dolore doloribus voluptatem. Modi quibusdam praesentium eum quae doloremque commodi laboriosam unde laborum? Amet similique quae, commodi labore minima consequuntur mollitia rerum et nisi harum eveniet quisquam officia qui facilis repudiandae impedit nesciunt ad repellat, pariatur, exercitationem aspernatur veritatis. Aliquam facere, quisquam impedit nemo architecto hic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Watermark>
    );
}

export default Testmonial;

