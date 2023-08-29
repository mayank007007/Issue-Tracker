// method of deleting the issue data using ajax
{
    let deleteIssue = function (deleteLink) {
        // we have use the ajax to controll the function
        $.ajax({
            type: "get",
            url: $(deleteLink).prop('href'),
            success: function (data) {
                // This line finds the closest ancestor element with the class .card (likely representing the issue container) and removes it from the DOM.
                $(deleteLink).closest('.card').remove();

                // written a code for show the notification
                new Noty({
                    theme: "relax",
                    text: data.message,
                    type: "success",
                    layout: "topRight",
                    timeout: 1500
                }).show();

            }, error: function (error) {
                console.log("Error", error);
            }
        })
    }

    // delete the data here we have called the function
    //This code ensures that the code inside it runs once the DOM is fully loaded.
    $(document).ready(function () {
        $('.delete-link-issue').click(function (e) {
            e.preventDefault();
            deleteIssue(this);
        });
    });
}