import './shortcode.scss'

window.copyBssbAdminShortcode = id => {
    var input = document.querySelector('#bssbAdminShortcode-' + id + ' input');
    var tooltip = document.querySelector('#bssbAdminShortcode-' + id + ' .tooltip');
    input.select();
    input.setSelectionRange(0, 30);
    document.execCommand('copy');
    tooltip.innerHTML = wp.i18n.__('Copied Successfully!', 'social-share');
    setTimeout(() => {
        tooltip.innerHTML = wp.i18n.__('Copy To Clipboard', 'social-share');
    }, 1500);
}