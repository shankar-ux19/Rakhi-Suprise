function openEnvelope() {

    const envelope =
        document.getElementById("envelope");

    const surprise =
        document.getElementById("surprise");


    envelope.classList.add("open");


    setTimeout(function () {

        surprise.style.display = "block";

        surprise.scrollIntoView({
            behavior: "smooth"
        });

    }, 1200);

}
