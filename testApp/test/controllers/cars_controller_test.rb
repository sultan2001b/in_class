require 'test_helper'

class CarsControllerTest < ActionDispatch::IntegrationTest
  test "should get name" do
    get cars_name_url
    assert_response :success
  end

  test "should get isNew:boolean" do
    get cars_isNew:boolean_url
    assert_response :success
  end

end
