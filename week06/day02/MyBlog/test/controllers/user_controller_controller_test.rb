require 'test_helper'

class UserControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get user_controller_show_url
    assert_response :success
  end

end
