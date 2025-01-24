import { Button } from '../../common/button/Button'

export const QuoteActions = ({ onNewQuote, onCopy }) => {
  return (
    <div className="flex gap-4 justify-end">
      <Button variant="secondary" onClick={onCopy}>
        Copy
      </Button>
      <Button onClick={onNewQuote}>
        New Quote
      </Button>
    </div>
  )
}