import questionImage from '../images/question.svg';

export default function AskForm() {
    function prepareEmail(event) {
        event.preventDefault();
        const fields = new FormData(event.currentTarget);
        const subject = encodeURIComponent('Вопрос по подбору запчасти');
        const body = encodeURIComponent(fields.get('message') + '\n\nКонтакт для ответа: ' + fields.get('contact'));
        window.location.href = 'mailto:mail@avtoded69.ru?subject=' + subject + '&body=' + body;
    }

    return <section className="mb-16" id="ask">
        <h2 className="text-2xl text-center my-10">Задать вопрос</h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2"><img src={questionImage} alt="" className="w-full"/></div>
            <form onSubmit={prepareEmail} className="w-full md:w-1/2 max-w-lg grid gap-4">
                <label>Какая деталь нужна?
                    <textarea required name="message" maxLength={1500} className="w-full p-2 border rounded-lg"
                              placeholder="Например, передние колодки на Гранту 2018 года"/>
                </label>
                <label>Как с вами связаться?
                    <input required name="contact" maxLength={160} className="w-full p-2 border rounded-lg"/>
                </label>
                <button className="action primary" type="submit">Открыть письмо в почте</button>
                <p>Отправьте подготовленное письмо из своего почтового приложения. Адрес магазина — <a href="mailto:mail@avtoded69.ru">mail@avtoded69.ru</a>.</p>
            </form>
        </div>
    </section>;
}
