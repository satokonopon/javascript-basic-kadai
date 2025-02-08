// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('text');

addBtn.addEventListener('click', () => {
    // li要素を新しく作成する
    const childList = document.createElement('text');
    // 作成した要素に「ボタンをクリックしました」というテキストを追加する
    childList.textContent = 'ボタンをクリックしました';
    // parentListの子要素全てを削除する
    while (parentList.firstChild) {
        parentList.removeChild(parentList.firstChild);
    }
    // childListを追加する
    parentList.appendChild(childList);
});