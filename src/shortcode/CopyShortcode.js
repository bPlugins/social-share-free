const { useState } = wp.element;
const { __ } = wp.i18n;

const ClipBoard = ({ shortcode }) => {
    const [hasCopied, setHasCopied] = useState(false);


    const handleCopy = async () => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(shortcode);
                setHasCopied(true);
                setTimeout(() => setHasCopied(false), 2000);
            } else {
                alert(__('Clipboard API is not supported in this browser. Please copy the shortcode manually.', 'b-social-share'));
            }
        } catch (err) {
            console.error("Failed to copy:", err);
            alert(__('Failed to copy shortcode automatically. Please copy it manually.', 'b-social-share'));
        }
    };



    return (
        <section className="clipBoard">
            <div className="clipBtnWrapper">
                <p>{__('Copy this shortcode and paste it into your post, page, or text widget content', 'b-social-share')}</p>
                <button onClick={handleCopy}>
                    {hasCopied ? __('Copied Shortcode!', 'b-social-share') : shortcode}
                </button>
            </div>
        </section>
    );
};

export default ClipBoard;
