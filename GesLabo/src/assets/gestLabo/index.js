        document.getElementById("menu-toggle").addEventListener("click", function() {
            if (window.innerWidth <= 768) {
                document.getElementById("sidebar").classList.toggle("active");
            } else {
                document.body.classList.toggle("collapsed");
            }
        });

        function toggleMenu(element) {
            element.parentElement.classList.toggle("open");
        }

        function hideSidebar() {
            if (window.innerWidth <= 768) {
                document.getElementById("sidebar").classList.remove("active");
            }
        }

        // Graphique des réservations par mois
        const reservationsCtx = document.getElementById('reservationsChart').getContext('2d');
        const reservationsChart = new Chart(reservationsCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct'],
                datasets: [{
                    label: 'Réservations',
                    data: [65, 59, 80, 81, 56, 55, 40, 70, 90, 120],
                    borderColor: '#00853E',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        // Graphique des demandes (camembert)
        const demandesCtx = document.getElementById('demandesChart').getContext('2d');
        const demandesChart = new Chart(demandesCtx, {
            type: 'pie',
            data: {
                labels: ['Confirmées', 'En attente', 'Annulées'],
                datasets: [{
                    data: [70, 15, 15],
                    backgroundColor: ['#00853E', '#F7D600', '#DC3545']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });