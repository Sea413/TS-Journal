var Journal;
(function (Journal) {
    var JournalClass = (function () {
        function JournalClass(name, entry) {
            this.name = name;
            this.entry = entry;
        }
        return JournalClass;
    }());
    Journal.JournalClass = JournalClass;
})(Journal || (Journal = {}));
$(document).ready(function () {
    var newEntry = [];
    console.log(newEntry);
    $('#form-entry').submit(function (event) {
        event.preventDefault();
        var title = $('#titleId').val();
        // var date = $('#dateEntry').val();
        var journalEntry = $('#textAreaId').val();
        console.log(journalEntry);
        console.log(newEntry);
        var JournalAppend = new Journal.JournalClass(title, journalEntry);
        newEntry.push(JournalAppend);
        console.log(JournalAppend);
        // $('#outputToPage').text("Your journal entry had " + output + " words.");
    });
});
