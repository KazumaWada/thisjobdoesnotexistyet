// JSONファイルの読み込みはfetchで行い、fsは不要です
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("loaded");

//     const job = document.getElementById('job');

//     // JSONファイルをfetchで読み込む
//     fetch('/json')
//         .then(response => response.json())
//         .then(jobList => {
//             // JSONデータの中からランダムに1つ選択
//             const randomIndex = Math.floor(Math.random() * jobList.length);
//             const selectedJob = jobList[randomIndex];
//             console.log(selectedJob[1]);

//             // 選択されたデータを表示
//             job.innerHTML = `
//                 <img src="${selectedJob.img}" class="img-fluid" id="img-id" alt="Responsive image">
//                 <p>${selectedJob.describe}</p>
//             `;
//         })
//         .catch(error => console.error('Error loading JSON:', error));
// });
document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");

    const job = document.getElementById('job');
    let jobList = [];

    // JSONファイルをfetchで読み込む
    fetch('/json')
        .then(response => response.json())
        .then(data => {
            jobList = data; // jobListをグローバルに保存
            displayRandomJob(); // 最初のランダムなデータを表示
        })
        .catch(error => console.error('Error loading JSON:', error));

    // ランダムにjobを表示する関数
    function displayRandomJob() {
        const randomIndex = Math.floor(Math.random() * jobList.length);
        const selectedJob = jobList[randomIndex];

        job.innerHTML = `
            <img src="${selectedJob.img}" class="img-fluid" id="img-id" alt="Responsive image">
            <div class="card shadow-sm p-4 mb-3" style="border-radius: 15px; background: #f9f9f9;">
     <div class="card-body">
        <h5 class="card-title text-center">
            <i class="bi bi-flower3 text-success"></i> <!-- アイコン -->
            ${selectedJob.title}
        </h5>
        <p class="card-text text-secondary">${selectedJob.describe}</p>
    </div>
</div>

        `;

        // 画像のクリックイベントを設定
        document.getElementById('img-id').addEventListener('click', displayRandomJob);
    }
});

