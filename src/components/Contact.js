function Contact() {
    return (
        <section>
            <h1>Contact Me</h1>
            <form>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Message: </label>
                    <textarea name="message" rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;