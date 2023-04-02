$('#myTable').DataTable({
    "dom": '<"top"lf>rt<"bottom"ip><"clear">',
    // Parametre de la langue du tableau
    "language": {
        "searchPlaceholder": "Rechercher",
        "search": "",
        "paginate": {
            "first": "Premier",
            "last": "Dernier",
            "next": "Suivant",
            "previous": "Précédent",
        },
        "info": "Affichage de _START_ à _END_ sur _TOTAL_ entrées",
        "infoEmpty": "Affichage de 0 à 0 sur 0 entrées",
        "infoFiltered": "(filtré de _MAX_ entrées au total)",
        "lengthMenu": "Afficher _MENU_ entrées",
        "zeroRecords": "Aucun résultat trouvé"
    },

    // Conditaion sur les pages a afficher
    "pagingType": "full_numbers",
    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Tous"]],
    "order": [[0, "asc"]],
    // "columns": [
    //     { "width": "25%" },
    //     null,
    //     null
    // ],

    // Parametre sur l affichage des diff elments
    "paging": true,
    "pageLength": 25,// Longue par defaut
    "lengthChange": true,
    "ordering": true,
    "searching": true,
    "info": true,

    // Ici on donne l'ordre de tri par defaut et centre les elements des cellules
    "order": [[0, "asc"]],
    "columnDefs": [
        {
            "targets": "_all",
            "className": "dt-body-center"
        }
    ],

    // Gestion d erreur d'initialisation du tableau
    "initComplete": function (settings, json) {
        console.log("Tableau initialisé avec succès !");
    },
    "error": function (xhr, error, thrown) {
        console.log("Erreur : " + error);
    }
});



// Script pour changer la couleur de la colonne sur laquelle le tri est applique
$('#myTable').on('order.dt', function () {
    var table = $('#myTable').DataTable();
    $('#myTable thead th').css('background-color', '');
    var th = $(table.column(table.order()[0][0]).header());
    th.css('background-color', 'red');
});
