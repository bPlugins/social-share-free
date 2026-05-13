import './shortcode.scss'

window.copyBSSBAdminShortcode = id => {
    var input = document.querySelector('#BSSBAdminShortcode-' + id + ' input');
    var tooltip = document.querySelector('#BSSBAdminShortcode-' + id + ' .tooltip');
    input.select();
    input.setSelectionRange(0, 30);
    document.execCommand('copy');
    tooltip.innerHTML = wp.i18n.__('Copied Successfully!', 'social-share');
    setTimeout(() => {
        tooltip.innerHTML = wp.i18n.__('Copy To Clipboard', 'social-share');
    }, 1500);
}