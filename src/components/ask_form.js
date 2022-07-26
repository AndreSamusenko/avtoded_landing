import {useState} from 'react';
import questionImage from '../images/question.svg';


function AskForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const TOKEN = "5501872396:AAFPShWrx2JnirxAyt4NdmIxcvajniVE8mA";
    return (
        <div className="mb-16" id="ask">
            <h1 className="text-xl lg:text-2xl xl:text-3xl text-center mb-10 mt-10">Задать вопрос</h1>
            <div className="container mx-auto flex flex-col mt-5 md:flex-row items-center space-y-0 space-x-10">
                <div className="md:w-1/2">
                    <img src={questionImage} className="w-full h-auto" alt="question"/>
                </div>

                <div className="md:w-1/2">
                    <form className="w-full text-left max-w-lg p-3 mb-5">
                        <div className="flex flex-col space-y-5 mb-5">
                            <div className="flex flex-col space-y-0">
                                <label className="text-sm md:text-base lg:text-lg xl:text-xl">Ваше имя</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg"
                                       value={name}
                                       onChange={(e) => setName(e.target.value)}
                                       required={true}/>
                            </div>
                            <div className="flex flex-col space-y-0">
                                <label className="text-sm md:text-base lg:text-lg xl:text-xl">Ваш email</label>
                                <input type="email" className="w-full p-2 border border-gray-300 rounded-lg"
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       required={true}/>
                            </div>

                            <div className="flex flex-col space-y-0">
                                <label className="text-sm md:text-base lg:text-lg xl:text-xl">Ваш телефон</label>
                                <input type="phone" className="w-full p-2 border border-gray-300 rounded-lg"
                                       value={phone}
                                       onChange={(e) => setPhone(e.target.value)}
                                       required={true}/>
                            </div>

                            <div className="flex flex-col space-y-0">
                                <label className="text-sm md:text-base lg:text-lg xl:text-xl">О чем хотите
                                    узнать?</label>
                                <textarea className="w-full p-2 border border-gray-300 rounded-lg"
                                          required={true}
                                          value={message}
                                          onChange={(e) => setMessage(e.target.value)}
                                          placeholder='"Есть ли антифриз в наличии?"'/>
                            </div>
                        </div>
                        <input type="submit"
                               className="p-2 border-2 border-[#6375FF] rounded-xl hover:bg-[#6375FF] hover:text-white"
                               onClick={(e) => {
                                   if (name.length > 0 && email.length > 0 && phone.length > 0 && message.length > 0 &&
                                       email.includes("@")) {
                                       e.preventDefault();
                                       fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                                           method: "POST",
                                           headers: {
                                               "Content-Type": "application/json"
                                           },
                                           body: JSON.stringify({
                                               chat_id: "523468577",
                                               text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nСообщение: ${message}`

                                           })
                                       }).then(res => res.json())
                                           .then(res => {
                                                   if (res.ok) {
                                                       alert("Ваше сообщение отправлено!");
                                                       setName("");
                                                       setEmail("");
                                                       setPhone("");
                                                       setMessage("");
                                                   } else {
                                                       alert("Что-то пошло не так, попробуйте еще раз!");
                                                   }
                                               }
                                           );
                                   }
                               }
                               }
                        />
                    </form>
                </div>

            </div>
        </div>
    );
}

export default AskForm;