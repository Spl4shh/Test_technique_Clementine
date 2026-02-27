export function dateFormater() {
      const formatDate = (date: Date): string => {
            return new Date(date).toLocaleDateString("fr-FR")
      }

      return {
            formatDate
      }
}