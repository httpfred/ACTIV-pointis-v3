
$(document).ready(function () {
    $('#pageBoard').click(function () {
        $.ajax({
            url: 'pages/board.html',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#content-main').html(data);
            },
            error: function () {
               $('#content-main').html('Erreur lors du chargement des données.');
            }
        });
    });
});


$(document).ready(function () {
    $('#pageSecteur').click(function () {
        $.ajax({
            url: 'pages/secteur.html',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#content-main').html(data);
            },
            error: function () {
               $('#content-main').html('Erreur lors du chargement des données.');
            }
        });
    });
});


$(document).ready(function () {
    $('#pagePointage').click(function () {
        $.ajax({
            url: 'pages/pointage.html',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#content-main').html(data);
            },
            error: function () {
               // $('#reponseAjax').html('Erreur lors du chargement des données.');
            }
        });
    });
});


$(document).ready(function () {
    $('#pageParametre').click(function () {
        $.ajax({
            url: './pages/parametre.html',
            method: 'GET',
            dataType: 'html',
            success: function (data) {
                $('#content-main').html(data);
            },
            error: function () {
               // $('#reponseAjax').html('Erreur lors du chargement des données.');
            }
        });
    });
});

