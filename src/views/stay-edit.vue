<template>
  <section class="main-layout">
    <section class="stay-edit-container">
      <form class="stay-edit-form">
        <section class="stay-edit-header">
          <div class="stay-edit-header-name">
            <h1>
              <input
                type="text"
                name="name"
                autocomplete="off"
                placeholder="stay name"
                required=""
                value=""
              />
            </h1>
          </div>
          <p>
            Address<input
              type="text"
              name="address"
              autocomplete="off"
              required=""
              value=""
            />
          </p>
          <div class="stay-edit-short-info">
            <div>
              <span class="stay-rate-display"
                ><i class="fas fa-star" aria-hidden="true"></i><span>new</span>
                <p>( 0 reviews )</p></span
              ><span hidden>•</span>
            </div>
            <div>
              <button type="button">
                <p>
                  <i class="fas fa-external-link-alt" aria-hidden="true"></i
                  >share
                </p></button
              ><button type="button" class="stay-save-btn">
                <p><i class="far fa-heart" aria-hidden="true"></i>save</p>
              </button>
            </div>
          </div>
        </section>
        <div class="stay-gallery">
          <div class="upload-preview" style="background-image: url('null')">
            <label class="img-upload-label" for="imgUpload"
              ><img src="../assets/img/share.jpg" alt=""><input
                type="file"
                accept="img/*"
                class="img-upload-btn"
                id="imgUpload"
                               
            /></label>
          </div>
          <div class="upload-preview" style="background-image: url('null')">
            <label class="img-upload-label" for="imgUpload"
              ><img src="../assets/img/share.jpg" alt=""><input
                type="file"
                accept="img/*"
                class="img-upload-btn"
                id="imgUpload"
            /></label>
          </div>
          <div class="upload-preview" style="background-image: url('null')">
            <label class="img-upload-label" for="imgUpload"
              ><img src="../assets/img/share.jpg" alt=""><input
                type="file"
                accept="img/*"
                class="img-upload-btn"
                id="imgUpload"
            /></label>
          </div>
          <div class="upload-preview" style="background-image: url('null')">
            <label class="img-upload-label" for="imgUpload"
              ><img src="../assets/img/share.jpg" alt=""><input
                type="file"
                accept="img/*"
                class="img-upload-btn"
                id="imgUpload"
            /></label>
          </div>
          <div class="upload-preview" style="background-image: url('null')">
            <label class="img-upload-label" for="imgUpload"
              ><img src="../assets/img/share.jpg" alt=""><input
                type="file"
                accept="img/*"
                class="img-upload-btn"
                id="imgUpload"
            /></label>
          </div>
        </div>
        <section class="stay-edit-info-container">
          <div class="stay-edit-long-info">
            <div class="stay-long-info-header">
              <div class="stay-long-info-header-txt">
                <div>
                  Capacity:<input
                    class="capacity"
                    type="number"
                    name="capacity"
                    autocomplete="off"
                    required=""
                    value=""
                  />Stay type<select class="stayType" name="stayType">
                    <option value="entire place">entire place</option>
                    <option value="private room">private room</option></select
                  >Property type<select
                    class="propertyType"
                    name="propertyType"
                  >
                    <option value="apartment">apartment</option>
                    <option value="castle">castle</option>
                    <option value="houseboat">eboat</option>
                    <option value="luxe">luxe</option>
                  </select>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_100,h_100,g_face/v1638252722/cats/nmlj2xgdlobdsrf7q22y.jpg"
                alt=""
              />
          <div class="order-form-container-input-price">
            Price <input type="number" name="price" autocomplete="off" value="" />/ night
          </div>

            </div>
            <div class="stay-feature-main-container">
              <div class="stay-feature-container">
                <div class="stay-feature-container-left">
                  <i class="fas fa-home" aria-hidden="true"></i>
                </div>

                <div class="stay-feature-container-right">
                  <h3>Entire place</h3>
                  <h4>You'll have the place to yourself.</h4>
                </div>
              </div>
              <div class="stay-feature-container">
                <div class="stay-feature-container-left">
                  <i class="fas fa-book-open" aria-hidden="true"></i>
                </div>
                <div class="stay-feature-container-right">
                  <h3>House rules</h3>
                  <h4>
                    This place isn’t suitable for children under 12 and the host
                    doesn’t allow pets.
                  </h4>
                </div>
              </div>
              <div class="stay-feature-container">
                <div class="stay-feature-container-left">
                  <i class="fas fa-medal" aria-hidden="true"></i>
                </div>

                <div class="stay-feature-container-right">
                  <h3>Puki is a Superhost</h3>
                  <h4>
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </h4>
                </div>
              </div>
              <div class="stay-feature-container">
                <div class="stay-feature-container-left">
                  <i class="fas fa-bookmark" aria-hidden="true"></i>
                </div>
                <div class="stay-feature-container-right">
                  <h3>Wifi</h3>
                  <h4>Guests often search for this popular amenity</h4>
                </div>
              </div>
            </div>
            <div class="description">
              <h2>description</h2>
              <textarea
                type="text"
                name="desc"
                autocomplete="off"
                required=""
              ></textarea>
            </div>
            <div class="amenities-list-main-container">
              <h2>Amenities</h2>
              <div class="amenities-list">
                <!-- <span
                  ><input
                    type="checkbox"
                    id="TV"
                    name="amenities"
                    value="true"
                    checked=""
                  /><label for="TV"> TV</label></span
                > --> 
                    <span>
                    <img class="tv" src="../assets/img/tv.png" alt="">
                    <input
                    type="checkbox"
                    id="tv"
                    name="amenities"
                    value="false"
                  /><label for="Wifi">TV</label></span
                >                              
                <span>
                    <img class="wifi" src="../assets/img/wifi.png" alt="">
                    <input
                    type="checkbox"
                    id="Wifi"
                    name="amenities"
                    value="false"
                  /><label for="Wifi">Wifi</label></span
                >
                <!-- <span
                  ><img src="../assets/img/wifi.png" alt="">
                  <input
                    type="checkbox"
                    id="Air conditioning"
                    name="amenities"
                    value="false"
                  /><label for="Air conditioning">AC </label></span
                > -->
                <span
                  >
                  <img src="../assets/img/smoking.png" alt=""><input
                    type="checkbox"
                    id="Smoking allowed"
                    name="amenities"
                    value="false"
                  /><label for="Smoking_allowed">Smoking allowed </label></span
                ><span
                  ><img src="../assets/img/paws.png" alt="">
                  <input
                    type="checkbox"
                    id="Pets allowed"
                    name="amenities"
                    value="false"
                  /><label for="Pets allowed">Pets allowed </label></span
                ><span
                  ><img class="kitchen" src="../assets/img/kitchen.png" alt="">
                  <input
                    type="checkbox"
                    id="Cooking basics"
                    name="amenities"
                    value="false"
                  /><label for="Cooking basics">Cooking basics </label></span
                >
              </div>
            </div>
          </div>

        </section>
        <button type="submit" class="stay-edit-save-btn">Save</button>
      </form>
    </section>
  </section>
</template>

<script>
export default {};
//todo - Allow creating, updating (and deleting) a stay
</script>

<style>
</style>