require 'test_helper'

class WheelDeflectionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @wheel_deflection = wheel_deflections(:one)
  end

  test "should get index" do
    get wheel_deflections_url
    assert_response :success
  end

  test "should get new" do
    get new_wheel_deflection_url
    assert_response :success
  end

  test "should create wheel_deflection" do
    assert_difference('WheelDeflection.count') do
      post wheel_deflections_url, params: { wheel_deflection: { description: @wheel_deflection.description, name: @wheel_deflection.name } }
    end

    assert_redirected_to wheel_deflection_url(WheelDeflection.last)
  end

  test "should show wheel_deflection" do
    get wheel_deflection_url(@wheel_deflection)
    assert_response :success
  end

  test "should get edit" do
    get edit_wheel_deflection_url(@wheel_deflection)
    assert_response :success
  end

  test "should update wheel_deflection" do
    patch wheel_deflection_url(@wheel_deflection), params: { wheel_deflection: { description: @wheel_deflection.description, name: @wheel_deflection.name } }
    assert_redirected_to wheel_deflection_url(@wheel_deflection)
  end

  test "should destroy wheel_deflection" do
    assert_difference('WheelDeflection.count', -1) do
      delete wheel_deflection_url(@wheel_deflection)
    end

    assert_redirected_to wheel_deflections_url
  end
end
