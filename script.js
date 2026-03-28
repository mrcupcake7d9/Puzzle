const button = document.getElementById("button");

button.addEventListener('click', function() {
    alert("Nečakal som že by si sa sem dostala ale očividne toho mnoho zvládneš.")
    setTimeout(() => {
        alert("Fun fact: Za posledný týždeň som Tomáša stretol 3-krát na random miestach")
    }, 2000);
});
