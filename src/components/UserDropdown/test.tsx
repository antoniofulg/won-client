import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Willian" />)

    expect(screen.getByText(/willian/i)).toBeInTheDocument()
  })

  it('should render the menu', async () => {
    render(<UserDropdown username="Willian" />)

    // open menu
    userEvent.click(screen.getByText(/willian/i))

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: /my profile/i })
      ).toBeInTheDocument()

      expect(
        screen.getByRole('link', { name: /wishlist/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /sign out/i })
      ).toBeInTheDocument()
    })
  })
})
