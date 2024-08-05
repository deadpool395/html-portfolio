function contactMe(){
    const recipient = 'danieldascy@gmail.com';
    const subject = 'Hello';
    const body = 'Please work for our Company.';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    console.log(mailtoLink);
    window.location.href = mailtoLink;
}

