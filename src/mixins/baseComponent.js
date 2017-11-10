// define um objeto mixin
var baseComponent = {
  props: {
    document: {
      type: Object,
      required: true
    },
    position: {
      type: String,
      default: 'left'
    },
    date: {
      type: String
    },
    onSave: {
      type: Function
    },
    editable: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      isEditing: false,
      editableDocument: this.document
    }
  },
  methods: {
    toggleEdit: function () {
      this.isEditing = !this.isEditing
    },
    save: function (document) {
      this.isEditing = false

      if (this.onSave) {
        this.onSave(document)
      }
    }
  }
}

export default baseComponent