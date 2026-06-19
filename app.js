import { db } from "./firebase-config.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const tableBody = document.getElementById("bookingTable");
const totalBooking = document.getElementById("totalBooking");

async function loadBooking() {

    tableBody.innerHTML = "";

    const snapshot = await getDocs(
        collection(db, "bookings")
    );

    totalBooking.innerText = snapshot.size;

    snapshot.forEach((doc) => {

        const data = doc.data();

        let statusClass = "";

        if(data.status === "Menunggu"){
            statusClass = "menunggu";
        }

        if(data.status === "Disetujui"){
            statusClass = "disetujui";
        }

        if(data.status === "Ditolak"){
            statusClass = "ditolak";
        }

        tableBody.innerHTML += `
        <tr>
            <td>${data.namaRuangan}</td>
            <td>${data.gedung}</td>
            <td>${data.namaPeminjam}</td>
            <td>${data.keperluan}</td>
            <td>${data.tanggal}</td>
            <td>${data.jamMulai} - ${data.jamSelesai}</td>
            <td>
                <span class="status ${statusClass}">
                    ${data.status}
                </span>
            </td>
        </tr>
        `;
    });
}

loadBooking();