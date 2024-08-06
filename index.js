function contactMe(){
    const recipient = 'danieldascy@gmail.com';
    const subject = 'Hello';
    const body = 'Please work for our Company.';

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    console.log(mailtoLink);
    window.location.href = mailtoLink;
}

function linkedIn(){
     window.open("https://www.linkedin.com/in/daniel-das-c-y-a42722178");
}

