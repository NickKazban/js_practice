function _createModal(options) {
    const modal = document.createElement(tagName: 'div');
    modal.classList.add('prac__modal')
    modal.insertAdjacentHTML( where: 'afterbegin', html: `
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal-title">Modal title</span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, natus.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, natus.</p>
                </div>
                <div class="modal-footer">
                    <button>
                        OK
                    </button>
                    <button>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    `)
}

$.modal = function (options) {
    return {
        open() { },
        close() { },
        destroy() { }
    }
}
