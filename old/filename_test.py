import unittest
from gen_words import make_valid_filename


class TestMakeValidFilename(unittest.TestCase):

  def test_make_valid_filename(self):
    self.assertEqual(make_valid_filename("This is a valid filename"),
                     "This_is_a_valid_filename")
    self.assertEqual(make_valid_filename(" This is an invalid filename?"),
                     "_This_is_an_invalid_filename_")
    self.assertEqual(make_valid_filename("This is a very long filename"),
                     "This_is_a_very_long_filename")
    self.assertEqual(make_valid_filename("1234567890123456789012345678901234567890"),
                     "_1234567890123456789012345678901234567890")

  def test_make_valid_filename_with_special_characters(self):
    self.assertEqual(make_valid_filename("This is a filename with special characters!"),
                     "This_is_a_filename_with_special_characters_")
    self.assertEqual(make_valid_filename("This is a filename with spaces"),
                     "This_is_a_filename_with_spaces")

  def test_make_valid_filename_with_leading_number(self):
    self.assertEqual(make_valid_filename("1234567890This is a valid filename"),
                     "_1234567890This_is_a_valid_filename")

  def test_make_valid_filename_with_slashes(self):
    self.assertEqual(make_valid_filename("This is a filename with slashes/"),
                     "This_is_a_filename_with_slashes_")
    self.assertEqual(make_valid_filename("This is a filename with spaces/"),
                     "This_is_a_filename_with_spaces_")

if __name__ == "__main__":
  unittest.main()
