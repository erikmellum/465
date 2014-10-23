require 'test_helper'

class OisControllerTest < ActionController::TestCase
  setup do
    @oi = ois(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:ois)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create oi" do
    assert_difference('Oi.count') do
      post :create, oi: { description: @oi.description, name: @oi.name }
    end

    assert_redirected_to oi_path(assigns(:oi))
  end

  test "should show oi" do
    get :show, id: @oi
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @oi
    assert_response :success
  end

  test "should update oi" do
    patch :update, id: @oi, oi: { description: @oi.description, name: @oi.name }
    assert_redirected_to oi_path(assigns(:oi))
  end

  test "should destroy oi" do
    assert_difference('Oi.count', -1) do
      delete :destroy, id: @oi
    end

    assert_redirected_to ois_path
  end
end
