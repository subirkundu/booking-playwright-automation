# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bookingUAT.spec.js >> Hotel Booking UAT
- Location: tests\bookingUAT.spec.js:6:1

# Error details

```
Test timeout of 70000ms exceeded.
```

```
Error: locator.click: Test timeout of 70000ms exceeded.
Call log:
  - waiting for getByTestId('filters-group-label-content').first()

```

# Page snapshot

```yaml
- generic [ref=f13e3]:
  - link "Skip to main content" [ref=f13e5] [cursor=pointer]:
    - /url: "#main"
  - generic [ref=f13e7]:
    - banner [ref=f13e20]:
      - generic [ref=f13e21]:
        - navigation [ref=f13e22]:
          - link "Booking.com" [ref=f13e26] [cursor=pointer]:
            - /url: https://www.booking.com/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
          - generic [ref=f13e29]:
            - button "Prices in Bangladeshi Taka, BDT" [ref=f13e31] [cursor=pointer]:
              - generic [ref=f13e32]: BDT
            - 'button "Language: English (US)" [ref=f13e34] [cursor=pointer]'
            - link "Customer support" [ref=f13e39] [cursor=pointer]:
              - /url: https://secure.booking.com/help.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553&source=header&src=profile_contact_cs
            - link "List your property" [ref=f13e44] [cursor=pointer]:
              - /url: https://join.booking.com/?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&lang=en-us&sid=d04de4c9418c48d0cb1cf36e143e4553&utm_medium=frontend&utm_source=topbar
            - link "Register an account" [ref=f13e46] [cursor=pointer]:
              - /url: https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&response_type=code&lang=en-us&aid=304142&bkng_action=capla_fpr&prompt=signin&state=UtEBa-iRuddF4L7HK2rN1LRuulaBZctG_mz_0AVJkdN7WUydOnxFgP_I24KPS4SvvdNGyTzKKdRCAAUXhgD_Rj6MgENy162_6BJtBBgDOrZxhkXYF4rFKLdDwaxbUD8Jpudkg4gUBS3DrEBjiKlCBT74CGQVk6AKdbFVRjXUqdo6-6vL3IwvGsqoXmT_GqKxFfni5W8hgyVSvMVaa024JFHYR1zBiKIsycxkXnprSIHRZqHP2gd_F-Kcab1SjAHepxdzk31nzGetDrf2Q0FHeP4CVNM%3D*eyJpZCI6InRyYXZlbGxlcl9oZWFkZXIifQ%3D%3D
              - generic [ref=f13e47]: Register
            - link "Sign in" [ref=f13e49] [cursor=pointer]:
              - /url: https://account.booking.com/auth/oauth2?client_id=vO1Kblk7xX9tUn2cpZLS&redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&response_type=code&lang=en-us&aid=304142&bkng_action=capla_fpr&prompt=signin&state=UtEBa-iRuddF4L7HK2rN1LRuulaBZctG_mz_0AVJkdN7WUydOnxFgP_I24KPS4SvvdNGyTzKKdRCAAUXhgD_Rj6MgENy162_6BJtBBgDOrZxhkXYF4rFKLdDwaxbUD8Jpudkg4gUBS3DrEBjiKlCBT74CGQVk6AKdbFVRjXUqdo6-6vL3IwvGsqoXmT_GqKxFfni5W8hgyVSvMVaa024JFHYR1zBiKIsycxkXnprSIHRZqHP2gd_F-Kcab1SjAHepxdzk31nzGetDrf2Q0FHeP4CVNM%3D*eyJpZCI6InRyYXZlbGxlcl9oZWFkZXIifQ%3D%3D
        - navigation "What are you looking for?" [ref=f13e51]:
          - menubar [ref=f13e54]:
            - menuitem "Stays" [ref=f13e55] [cursor=pointer]
            - menuitem "Flights" [ref=f13e61] [cursor=pointer]
            - menuitem "Car rental" [ref=f13e67] [cursor=pointer]
            - menuitem "Attractions" [ref=f13e73] [cursor=pointer]
            - menuitem "Airport taxis" [ref=f13e79] [cursor=pointer]
    - main [ref=f13e85]:
      - generic [ref=f13e97]:
        - generic [ref=f13e100]:
          - heading "Page Not Found" [level=1] [ref=f13e101]
          - paragraph [ref=f13e102]: It happens! Let’s get you back on track.
        - region "Search properties" [ref=f13e105]:
          - generic [ref=f13e106]:
            - generic [ref=f13e110]:
              - generic [ref=f13e115]:
                - generic [ref=f13e116]: Enter destination
                - combobox "Enter destination" [ref=f13e120]: Cox's Bazar
              - button [ref=f13e122] [cursor=pointer]:
                - img "Clear" [ref=f13e123]
            - generic [ref=f13e127]:
              - button "Select dates Mon, Jan 4 — Sat, Jan 9" [expanded] [ref=f13e128] [cursor=pointer]:
                - generic [ref=f13e133]:
                  - generic [ref=f13e134]: Select dates
                  - generic [ref=f13e135]: Mon, Jan 4 — Sat, Jan 9
              - generic [ref=f13e137]:
                - tablist [ref=f13e139]:
                  - tab "Calendar" [selected] [ref=f13e140] [cursor=pointer]
                  - tab "I'm flexible" [ref=f13e143] [cursor=pointer]
                - tabpanel "Calendar" [ref=f13e146]:
                  - generic [ref=f13e147]:
                    - generic [ref=f13e148]:
                      - button "Previous month" [ref=f13e149] [cursor=pointer]
                      - button "Next month" [ref=f13e154] [cursor=pointer]
                      - generic [ref=f13e159]:
                        - generic [ref=f13e160]:
                          - heading "January 2027" [level=3] [ref=f13e161]
                          - grid "January 2027" [ref=f13e162]:
                            - rowgroup [ref=f13e163]:
                              - row [ref=f13e164]:
                                - columnheader [ref=f13e165]:
                                  - generic [ref=f13e166]: Mon
                                - columnheader [ref=f13e167]:
                                  - generic [ref=f13e168]: Tue
                                - columnheader [ref=f13e169]:
                                  - generic [ref=f13e170]: Wed
                                - columnheader [ref=f13e171]:
                                  - generic [ref=f13e172]: Thu
                                - columnheader [ref=f13e173]:
                                  - generic [ref=f13e174]: Fri
                                - columnheader [ref=f13e175]:
                                  - generic [ref=f13e176]: Sat
                                - columnheader [ref=f13e177]:
                                  - generic [ref=f13e178]: Sun
                            - rowgroup [ref=f13e179]:
                              - row [ref=f13e180]:
                                - gridcell [ref=f13e181]
                                - gridcell [ref=f13e182]
                                - gridcell [ref=f13e183]
                                - gridcell [ref=f13e184]
                                - gridcell "Friday, January 1, 2027" [ref=f13e185]:
                                  - checkbox "Friday, January 1, 2027" [ref=f13e186] [cursor=pointer]:
                                    - generic [ref=f13e187]: "1"
                                - gridcell "Saturday, January 2, 2027" [ref=f13e188]:
                                  - checkbox "Saturday, January 2, 2027" [ref=f13e189] [cursor=pointer]:
                                    - generic [ref=f13e190]: "2"
                                - gridcell "Sunday, January 3, 2027" [ref=f13e191]:
                                  - checkbox "Sunday, January 3, 2027" [ref=f13e192] [cursor=pointer]:
                                    - generic [ref=f13e193]: "3"
                              - row [ref=f13e194]:
                                - gridcell "Monday, January 4, 2027" [selected] [ref=f13e195]:
                                  - checkbox "Monday, January 4, 2027" [checked] [ref=f13e196] [cursor=pointer]:
                                    - generic [ref=f13e197]: "4"
                                - gridcell "Tuesday, January 5, 2027" [ref=f13e198]:
                                  - checkbox "Tuesday, January 5, 2027" [checked] [ref=f13e199] [cursor=pointer]:
                                    - generic [ref=f13e200]: "5"
                                - gridcell "Wednesday, January 6, 2027" [ref=f13e201]:
                                  - checkbox "Wednesday, January 6, 2027" [checked] [ref=f13e202] [cursor=pointer]:
                                    - generic [ref=f13e203]: "6"
                                - gridcell "Thursday, January 7, 2027" [ref=f13e204]:
                                  - checkbox "Thursday, January 7, 2027" [checked] [ref=f13e205] [cursor=pointer]:
                                    - generic [ref=f13e206]: "7"
                                - gridcell "Friday, January 8, 2027" [ref=f13e207]:
                                  - checkbox "Friday, January 8, 2027" [checked] [ref=f13e208] [cursor=pointer]:
                                    - generic [ref=f13e209]: "8"
                                - gridcell "Saturday, January 9, 2027" [selected] [ref=f13e210]:
                                  - checkbox "Saturday, January 9, 2027" [checked] [ref=f13e211] [cursor=pointer]:
                                    - generic [ref=f13e212]: "9"
                                - gridcell "Sunday, January 10, 2027" [ref=f13e213]:
                                  - checkbox "Sunday, January 10, 2027" [ref=f13e214] [cursor=pointer]:
                                    - generic [ref=f13e215]: "10"
                              - row [ref=f13e216]:
                                - gridcell "Monday, January 11, 2027" [ref=f13e217]:
                                  - checkbox "Monday, January 11, 2027" [ref=f13e218] [cursor=pointer]:
                                    - generic [ref=f13e219]: "11"
                                - gridcell "Tuesday, January 12, 2027" [ref=f13e220]:
                                  - checkbox "Tuesday, January 12, 2027" [ref=f13e221] [cursor=pointer]:
                                    - generic [ref=f13e222]: "12"
                                - gridcell "Wednesday, January 13, 2027" [ref=f13e223]:
                                  - checkbox "Wednesday, January 13, 2027" [ref=f13e224] [cursor=pointer]:
                                    - generic [ref=f13e225]: "13"
                                - gridcell "Thursday, January 14, 2027" [ref=f13e226]:
                                  - checkbox "Thursday, January 14, 2027" [ref=f13e227] [cursor=pointer]:
                                    - generic [ref=f13e228]: "14"
                                - gridcell "Friday, January 15, 2027" [ref=f13e229]:
                                  - checkbox "Friday, January 15, 2027" [ref=f13e230] [cursor=pointer]:
                                    - generic [ref=f13e231]: "15"
                                - gridcell "Saturday, January 16, 2027" [ref=f13e232]:
                                  - checkbox "Saturday, January 16, 2027" [ref=f13e233] [cursor=pointer]:
                                    - generic [ref=f13e234]: "16"
                                - gridcell "Sunday, January 17, 2027" [ref=f13e235]:
                                  - checkbox "Sunday, January 17, 2027" [ref=f13e236] [cursor=pointer]:
                                    - generic [ref=f13e237]: "17"
                              - row [ref=f13e238]:
                                - gridcell "Monday, January 18, 2027" [ref=f13e239]:
                                  - checkbox "Monday, January 18, 2027" [ref=f13e240] [cursor=pointer]:
                                    - generic [ref=f13e241]: "18"
                                - gridcell "Tuesday, January 19, 2027" [ref=f13e242]:
                                  - checkbox "Tuesday, January 19, 2027" [ref=f13e243] [cursor=pointer]:
                                    - generic [ref=f13e244]: "19"
                                - gridcell "Wednesday, January 20, 2027" [ref=f13e245]:
                                  - checkbox "Wednesday, January 20, 2027" [ref=f13e246] [cursor=pointer]:
                                    - generic [ref=f13e247]: "20"
                                - gridcell "Thursday, January 21, 2027" [ref=f13e248]:
                                  - checkbox "Thursday, January 21, 2027" [ref=f13e249] [cursor=pointer]:
                                    - generic [ref=f13e250]: "21"
                                - gridcell "Friday, January 22, 2027" [ref=f13e251]:
                                  - checkbox "Friday, January 22, 2027" [ref=f13e252] [cursor=pointer]:
                                    - generic [ref=f13e253]: "22"
                                - gridcell "Saturday, January 23, 2027" [ref=f13e254]:
                                  - checkbox "Saturday, January 23, 2027" [ref=f13e255] [cursor=pointer]:
                                    - generic [ref=f13e256]: "23"
                                - gridcell "Sunday, January 24, 2027" [ref=f13e257]:
                                  - checkbox "Sunday, January 24, 2027" [ref=f13e258] [cursor=pointer]:
                                    - generic [ref=f13e259]: "24"
                              - row [ref=f13e260]:
                                - gridcell "Monday, January 25, 2027" [ref=f13e261]:
                                  - checkbox "Monday, January 25, 2027" [ref=f13e262] [cursor=pointer]:
                                    - generic [ref=f13e263]: "25"
                                - gridcell "Tuesday, January 26, 2027" [ref=f13e264]:
                                  - checkbox "Tuesday, January 26, 2027" [ref=f13e265] [cursor=pointer]:
                                    - generic [ref=f13e266]: "26"
                                - gridcell "Wednesday, January 27, 2027" [ref=f13e267]:
                                  - checkbox "Wednesday, January 27, 2027" [ref=f13e268] [cursor=pointer]:
                                    - generic [ref=f13e269]: "27"
                                - gridcell "Thursday, January 28, 2027" [ref=f13e270]:
                                  - checkbox "Thursday, January 28, 2027" [ref=f13e271] [cursor=pointer]:
                                    - generic [ref=f13e272]: "28"
                                - gridcell "Friday, January 29, 2027" [ref=f13e273]:
                                  - checkbox "Friday, January 29, 2027" [ref=f13e274] [cursor=pointer]:
                                    - generic [ref=f13e275]: "29"
                                - gridcell "Saturday, January 30, 2027" [ref=f13e276]:
                                  - checkbox "Saturday, January 30, 2027" [ref=f13e277] [cursor=pointer]:
                                    - generic [ref=f13e278]: "30"
                                - gridcell "Sunday, January 31, 2027" [ref=f13e279]:
                                  - checkbox "Sunday, January 31, 2027" [ref=f13e280] [cursor=pointer]:
                                    - generic [ref=f13e281]: "31"
                        - generic [ref=f13e282]:
                          - heading "February 2027" [level=3] [ref=f13e283]
                          - grid "February 2027" [ref=f13e284]:
                            - rowgroup [ref=f13e285]:
                              - row [ref=f13e286]:
                                - columnheader [ref=f13e287]:
                                  - generic [ref=f13e288]: Mon
                                - columnheader [ref=f13e289]:
                                  - generic [ref=f13e290]: Tue
                                - columnheader [ref=f13e291]:
                                  - generic [ref=f13e292]: Wed
                                - columnheader [ref=f13e293]:
                                  - generic [ref=f13e294]: Thu
                                - columnheader [ref=f13e295]:
                                  - generic [ref=f13e296]: Fri
                                - columnheader [ref=f13e297]:
                                  - generic [ref=f13e298]: Sat
                                - columnheader [ref=f13e299]:
                                  - generic [ref=f13e300]: Sun
                            - rowgroup [ref=f13e301]:
                              - row [ref=f13e302]:
                                - gridcell "Monday, February 1, 2027" [ref=f13e303]:
                                  - checkbox "Monday, February 1, 2027" [ref=f13e304] [cursor=pointer]:
                                    - generic [ref=f13e305]: "1"
                                - gridcell "Tuesday, February 2, 2027" [ref=f13e306]:
                                  - checkbox "Tuesday, February 2, 2027" [ref=f13e307] [cursor=pointer]:
                                    - generic [ref=f13e308]: "2"
                                - gridcell "Wednesday, February 3, 2027" [ref=f13e309]:
                                  - checkbox "Wednesday, February 3, 2027" [ref=f13e310] [cursor=pointer]:
                                    - generic [ref=f13e311]: "3"
                                - gridcell "Thursday, February 4, 2027" [ref=f13e312]:
                                  - checkbox "Thursday, February 4, 2027" [ref=f13e313] [cursor=pointer]:
                                    - generic [ref=f13e314]: "4"
                                - gridcell "Friday, February 5, 2027" [ref=f13e315]:
                                  - checkbox "Friday, February 5, 2027" [ref=f13e316] [cursor=pointer]:
                                    - generic [ref=f13e317]: "5"
                                - gridcell "Saturday, February 6, 2027" [ref=f13e318]:
                                  - checkbox "Saturday, February 6, 2027" [ref=f13e319] [cursor=pointer]:
                                    - generic [ref=f13e320]: "6"
                                - gridcell "Sunday, February 7, 2027" [ref=f13e321]:
                                  - checkbox "Sunday, February 7, 2027" [ref=f13e322] [cursor=pointer]:
                                    - generic [ref=f13e323]: "7"
                              - row [ref=f13e324]:
                                - gridcell "Monday, February 8, 2027" [ref=f13e325]:
                                  - checkbox "Monday, February 8, 2027" [ref=f13e326] [cursor=pointer]:
                                    - generic [ref=f13e327]: "8"
                                - gridcell "Tuesday, February 9, 2027" [ref=f13e328]:
                                  - checkbox "Tuesday, February 9, 2027" [ref=f13e329] [cursor=pointer]:
                                    - generic [ref=f13e330]: "9"
                                - gridcell "Wednesday, February 10, 2027" [ref=f13e331]:
                                  - checkbox "Wednesday, February 10, 2027" [ref=f13e332] [cursor=pointer]:
                                    - generic [ref=f13e333]: "10"
                                - gridcell "Thursday, February 11, 2027" [ref=f13e334]:
                                  - checkbox "Thursday, February 11, 2027" [ref=f13e335] [cursor=pointer]:
                                    - generic [ref=f13e336]: "11"
                                - gridcell "Friday, February 12, 2027" [ref=f13e337]:
                                  - checkbox "Friday, February 12, 2027" [ref=f13e338] [cursor=pointer]:
                                    - generic [ref=f13e339]: "12"
                                - gridcell "Saturday, February 13, 2027" [ref=f13e340]:
                                  - checkbox "Saturday, February 13, 2027" [ref=f13e341] [cursor=pointer]:
                                    - generic [ref=f13e342]: "13"
                                - gridcell "Sunday, February 14, 2027" [ref=f13e343]:
                                  - checkbox "Sunday, February 14, 2027" [ref=f13e344] [cursor=pointer]:
                                    - generic [ref=f13e345]: "14"
                              - row [ref=f13e346]:
                                - gridcell "Monday, February 15, 2027" [ref=f13e347]:
                                  - checkbox "Monday, February 15, 2027" [ref=f13e348] [cursor=pointer]:
                                    - generic [ref=f13e349]: "15"
                                - gridcell "Tuesday, February 16, 2027" [ref=f13e350]:
                                  - checkbox "Tuesday, February 16, 2027" [ref=f13e351] [cursor=pointer]:
                                    - generic [ref=f13e352]: "16"
                                - gridcell "Wednesday, February 17, 2027" [ref=f13e353]:
                                  - checkbox "Wednesday, February 17, 2027" [ref=f13e354] [cursor=pointer]:
                                    - generic [ref=f13e355]: "17"
                                - gridcell "Thursday, February 18, 2027" [ref=f13e356]:
                                  - checkbox "Thursday, February 18, 2027" [ref=f13e357] [cursor=pointer]:
                                    - generic [ref=f13e358]: "18"
                                - gridcell "Friday, February 19, 2027" [ref=f13e359]:
                                  - checkbox "Friday, February 19, 2027" [ref=f13e360] [cursor=pointer]:
                                    - generic [ref=f13e361]: "19"
                                - gridcell "Saturday, February 20, 2027" [ref=f13e362]:
                                  - checkbox "Saturday, February 20, 2027" [ref=f13e363] [cursor=pointer]:
                                    - generic [ref=f13e364]: "20"
                                - gridcell "Sunday, February 21, 2027" [ref=f13e365]:
                                  - checkbox "Sunday, February 21, 2027" [ref=f13e366] [cursor=pointer]:
                                    - generic [ref=f13e367]: "21"
                              - row [ref=f13e368]:
                                - gridcell "Monday, February 22, 2027" [ref=f13e369]:
                                  - checkbox "Monday, February 22, 2027" [ref=f13e370] [cursor=pointer]:
                                    - generic [ref=f13e371]: "22"
                                - gridcell "Tuesday, February 23, 2027" [ref=f13e372]:
                                  - checkbox "Tuesday, February 23, 2027" [ref=f13e373] [cursor=pointer]:
                                    - generic [ref=f13e374]: "23"
                                - gridcell "Wednesday, February 24, 2027" [ref=f13e375]:
                                  - checkbox "Wednesday, February 24, 2027" [ref=f13e376] [cursor=pointer]:
                                    - generic [ref=f13e377]: "24"
                                - gridcell "Thursday, February 25, 2027" [ref=f13e378]:
                                  - checkbox "Thursday, February 25, 2027" [ref=f13e379] [cursor=pointer]:
                                    - generic [ref=f13e380]: "25"
                                - gridcell "Friday, February 26, 2027" [ref=f13e381]:
                                  - checkbox "Friday, February 26, 2027" [ref=f13e382] [cursor=pointer]:
                                    - generic [ref=f13e383]: "26"
                                - gridcell "Saturday, February 27, 2027" [ref=f13e384]:
                                  - checkbox "Saturday, February 27, 2027" [ref=f13e385] [cursor=pointer]:
                                    - generic [ref=f13e386]: "27"
                                - gridcell "Sunday, February 28, 2027" [ref=f13e387]:
                                  - checkbox "Sunday, February 28, 2027" [ref=f13e388] [cursor=pointer]:
                                    - generic [ref=f13e389]: "28"
                    - radiogroup "Flexible date options" [ref=f13e392]:
                      - region [ref=f13e395]:
                        - group [ref=f13e396]:
                          - generic [ref=f13e397]:
                            - radio "Exact dates" [checked] [ref=f13e398]
                            - generic [ref=f13e399] [cursor=pointer]: Exact dates
                        - group [ref=f13e401]:
                          - generic "Include dates 1 day before or after selected dates" [ref=f13e402]:
                            - radio "Include dates 1 day before or after selected dates" [ref=f13e403]
                            - generic [ref=f13e404] [cursor=pointer]: 1 day
                        - group [ref=f13e410]:
                          - generic "Include dates 2 days before or after selected dates" [ref=f13e411]:
                            - radio "Include dates 2 days before or after selected dates" [ref=f13e412]
                            - generic [ref=f13e413] [cursor=pointer]: 2 days
                        - group [ref=f13e419]:
                          - generic "Include dates 3 days before or after selected dates" [ref=f13e420]:
                            - radio "Include dates 3 days before or after selected dates" [ref=f13e421]
                            - generic [ref=f13e422] [cursor=pointer]: 3 days
                        - group [ref=f13e428]:
                          - generic "Include dates 7 days before or after selected dates" [ref=f13e429]:
                            - radio "Include dates 7 days before or after selected dates" [ref=f13e430]
                            - generic [ref=f13e431] [cursor=pointer]: 7 days
            - generic [ref=f13e442] [cursor=pointer]:
              - generic [ref=f13e443]: Select occupancy
              - 'button "Number of travelers and rooms. Currently selected: 2 adults · 3 children · 2 rooms" [ref=f13e445]':
                - generic [ref=f13e446]: 2 adults · 3 children · 2 rooms
            - button "Search" [ref=f13e452] [cursor=pointer]
    - contentinfo [ref=f13e465]:
      - navigation "Quick Links" [ref=f13e468]:
        - list [ref=f13e469]:
          - listitem [ref=f13e470]:
            - link "Countries" [ref=f13e471] [cursor=pointer]:
              - /url: https://www.booking.com/country.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e474]:
            - link "Regions" [ref=f13e475] [cursor=pointer]:
              - /url: https://www.booking.com/region.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e478]:
            - link "Cities" [ref=f13e479] [cursor=pointer]:
              - /url: https://www.booking.com/city.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e482]:
            - link "Districts" [ref=f13e483] [cursor=pointer]:
              - /url: https://www.booking.com/district.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e486]:
            - link "Airports" [ref=f13e487] [cursor=pointer]:
              - /url: https://www.booking.com/airport.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e490]:
            - link "Hotels" [ref=f13e491] [cursor=pointer]:
              - /url: https://www.booking.com/hotel/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e494]:
            - link "Places of interest" [ref=f13e495] [cursor=pointer]:
              - /url: https://www.booking.com/landmark.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e498]:
            - link "Vacation Homes" [ref=f13e499] [cursor=pointer]:
              - /url: https://www.booking.com/booking-home/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e502]:
            - link "Apartments" [ref=f13e503] [cursor=pointer]:
              - /url: https://www.booking.com/apartments/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e506]:
            - link "Resorts" [ref=f13e507] [cursor=pointer]:
              - /url: https://www.booking.com/resorts/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e510]:
            - link "Villas" [ref=f13e511] [cursor=pointer]:
              - /url: https://www.booking.com/villas/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e514]:
            - link "Hostels" [ref=f13e515] [cursor=pointer]:
              - /url: https://www.booking.com/hostels/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e518]:
            - link "B&Bs" [ref=f13e519] [cursor=pointer]:
              - /url: https://www.booking.com/bed-and-breakfast/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e522]:
            - link "Guest Houses" [ref=f13e523] [cursor=pointer]:
              - /url: https://www.booking.com/guest-house/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e526]:
            - link "Unique places to stay" [ref=f13e527] [cursor=pointer]:
              - /url: https://www.booking.com/accommodations.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - text: .
          - listitem [ref=f13e530]:
            - link "Discover monthly stays" [ref=f13e531] [cursor=pointer]:
              - /url: https://www.booking.com/extended-stays/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
      - generic [ref=f13e535]:
        - generic [ref=f13e536]:
          - heading "Support" [level=3] [ref=f13e538]
          - list [ref=f13e539]:
            - listitem [ref=f13e540]:
              - link "Manage your trips" [ref=f13e541] [cursor=pointer]:
                - /url: https://secure.booking.com/content/cs.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e543]:
              - link "Contact Customer Service" [ref=f13e544] [cursor=pointer]:
                - /url: https://secure.booking.com/help.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e546]:
              - link "Safety Resource Center" [ref=f13e547] [cursor=pointer]:
                - /url: https://www.booking.com/trust_and_safety.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
        - generic [ref=f13e549]:
          - heading "Discover" [level=3] [ref=f13e551]
          - list [ref=f13e552]:
            - listitem [ref=f13e553]:
              - link "Genius loyalty program" [ref=f13e554] [cursor=pointer]:
                - /url: https://www.booking.com/genius.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e556]:
              - link "Seasonal and holiday deals" [ref=f13e557] [cursor=pointer]:
                - /url: https://www.booking.com/deals/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e559]:
              - link "Travel articles" [ref=f13e560] [cursor=pointer]:
                - /url: https://www.booking.com/articles.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e562]:
              - link "Booking.com for Business" [ref=f13e563] [cursor=pointer]:
                - /url: https://business.booking.com/?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e565]:
              - link "Traveller Review Awards" [ref=f13e566] [cursor=pointer]:
                - /url: https://www.booking.com/traveller-awards/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e568]:
              - link "Car rental" [ref=f13e569] [cursor=pointer]:
                - /url: https://www.booking.com/cars/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e571]:
              - link "Flight finder" [ref=f13e572] [cursor=pointer]:
                - /url: https://booking.com/pxgo?token=UmFuZG9tSVYkc2RlIyh9Yek6N0IyIDltBTxfBQJ6ZDTQryfb5hnM3YCRV38vj2Huxg1qPc9GLNsGBDKMyyj_8wXG-cJk2Fdk_vp7b6pAV_HggdUpKfCq87mZBfOUdsYu129st_uuACRUTMQwN3j2Bx_pWtrr-xK53NyONREvFbIzO4a5xCItD6Tzwhm7xZy5W4oJYf22OYm4o-OXgFu7H_bqcPUPioQTYePuwfD5fpXxc_tREDdyWZYl7HrnDO-R1-YCN-rSCAVGrLA5N8GpirbXXUpt3WN-AuneECtq8UTbFOgWiQQoFugAqS1H_AxhdrsoSmQBIJB00kkwEVHLqRkbG6UY0ik3ePZD-KP6_YhDZOuIeyHTyP7PVkjpN-xniD0LgRJ7zHRmGHrV7KnAP-fH5g59lXnR73A5aeetOsMVIQDNPjGF_R_j2l0FAJIZNT2bz2rndAEAOfVxI1CYDYOVtgUe-nRHpiCIXMeGBXLFthGf5OWwHlbyaB2oGAiLrY47PPFK33SlDmD0sB21qeqdhAjJABJZ886xRztv2hVvDkJJs08C3Q&url=https%3A%2F%2Fbooking.kayak.com%2Fin%3Fsid%3Dd04de4c9418c48d0cb1cf36e143e4553%26mc%3DBDT%26bdclc%3Den-us%26p%3Dfooter_link%26a%3Dbdc%252Ffooter_link&lang=en-us&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&aid=304142
            - listitem [ref=f13e574]:
              - link "Restaurant reservations" [ref=f13e575] [cursor=pointer]:
                - /url: https://www.opentable.com/?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&ref=16087
            - listitem [ref=f13e577]:
              - link "Booking.com for Travel Agents" [ref=f13e578] [cursor=pointer]:
                - /url: https://www.booking.com/affiliate-program/v2/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553&utm_campaign=booking-footer&utm_content=travel-agents-link&utm_medium=referral&utm_source=booking.com
        - generic [ref=f13e580]:
          - heading "Terms and settings" [level=3] [ref=f13e582]
          - list [ref=f13e583]:
            - listitem [ref=f13e584]:
              - link "Privacy Notice" [ref=f13e585] [cursor=pointer]:
                - /url: https://www.booking.com/content/privacy.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e587]:
              - link "Terms of Service" [ref=f13e588] [cursor=pointer]:
                - /url: https://www.booking.com/content/terms.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e590]:
              - link "Accessibility Statement" [ref=f13e591] [cursor=pointer]:
                - /url: https://www.booking.com/content/accessibility_statement.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e593]:
              - link "Partner dispute" [ref=f13e594] [cursor=pointer]:
                - /url: https://secure.booking.com/content/complaints.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e596]:
              - link "Modern Slavery Statement" [ref=f13e597] [cursor=pointer]:
                - /url: https://www.bookingholdings.com/modern-slavery-statement/?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE
            - listitem [ref=f13e599]:
              - link "Human Rights Statement" [ref=f13e600] [cursor=pointer]:
                - /url: https://www.bookingholdings.com/about/compliance-and-ethics/human-rights/?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE
        - generic [ref=f13e602]:
          - heading "Partners" [level=3] [ref=f13e604]
          - list [ref=f13e605]:
            - listitem [ref=f13e606]:
              - link "Extranet login" [ref=f13e607] [cursor=pointer]:
                - /url: https://admin.booking.com/?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553&utm_campaign=login_footer_v0&utm_medium=frontend&utm_source=extranet_login_footer
            - listitem [ref=f13e609]:
              - link "Partner help" [ref=f13e610] [cursor=pointer]:
                - /url: https://partner.booking.com/en-us?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553&utm_campaign=footer_list&utm_medium=frontend_footer&utm_source=booking.com
            - listitem [ref=f13e612]:
              - link "List your property" [ref=f13e613] [cursor=pointer]:
                - /url: https://join.booking.com/?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&lang=en-us&sid=d04de4c9418c48d0cb1cf36e143e4553&utm_medium=frontend&utm_source=footer_menu
            - listitem [ref=f13e615]:
              - link "Become an affiliate" [ref=f13e616] [cursor=pointer]:
                - /url: https://www.booking.com/affiliate-program/v2/index.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553&utm_campaign=booking-footer&utm_content=become-an-affiliate-link&utm_medium=referral&utm_source=booking.com
        - generic [ref=f13e618]:
          - heading "About" [level=3] [ref=f13e620]
          - list [ref=f13e621]:
            - listitem [ref=f13e622]:
              - link "About Booking.com" [ref=f13e623] [cursor=pointer]:
                - /url: https://www.booking.com/content/about.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e625]:
              - link "How We Work" [ref=f13e626] [cursor=pointer]:
                - /url: https://www.booking.com/content/how_we_work.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e628]:
              - link "Sustainability" [ref=f13e629] [cursor=pointer]:
                - /url: https://sustainability.booking.com/?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE
            - listitem [ref=f13e631]:
              - link "Press center" [ref=f13e632] [cursor=pointer]:
                - /url: https://globalnews.booking.com/?aid=304142&lang=en
            - listitem [ref=f13e634]:
              - link "Careers" [ref=f13e635] [cursor=pointer]:
                - /url: https://careers.booking.com/?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE
            - listitem [ref=f13e637]:
              - link "Investor relations" [ref=f13e638] [cursor=pointer]:
                - /url: https://www.bookingholdings.com/?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE
            - listitem [ref=f13e640]:
              - link "Corporate contact" [ref=f13e641] [cursor=pointer]:
                - /url: https://www.booking.com/content/contact-us.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
            - listitem [ref=f13e643]:
              - link "Content guidelines and reporting" [ref=f13e644] [cursor=pointer]:
                - /url: https://www.booking.com/content-moderation-policy/overview-page.html?aid=304142&label=gen173bo-10CAMoFEIKY294cy1iYXphckgxWANoFIgBAZgBM7gBF8gBDNgBA-gBAfgBAYgCAZgCAqgCAbgCtJ681AbAAgHSAiQyZmQ0ZmIyMS0zMjEwLTRjNTgtOWRiYS04M2Y2NDNhY2UwMDXYAgHgAgE&sid=d04de4c9418c48d0cb1cf36e143e4553
      - generic [ref=f13e647]:
        - generic [ref=f13e648]:
          - 'button "Language: English (US)" [ref=f13e650] [cursor=pointer]'
          - button "Prices in Bangladeshi Taka" [ref=f13e655] [cursor=pointer]:
            - generic [ref=f13e656]: BDT
        - separator [ref=f13e657]
        - generic [ref=f13e658]:
          - generic [ref=f13e659]: Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.
          - generic [ref=f13e661]: Copyright © 1996–2026 Booking.com™. All rights reserved.
        - generic [ref=f13e662]:
          - img "Booking.com" [ref=f13e663]
          - img "Priceline.com" [ref=f13e666]
          - img "Kayak" [ref=f13e670]
          - img "Agoda" [ref=f13e685]
          - img "OpenTable" [ref=f13e694]
```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | 
  3   | class HotelBook {
  4   |     constructor(page) {
  5   |         this.page = page;
  6   | 
  7   |         this.dismiss1 = page.getByRole('button', { name: 'Dismiss sign-in info.' });
  8   | 
  9   |         this.going = page.getByPlaceholder("Where are you going?"); //For Desktop
  10  |         this.hardLoc = page.locator('.efbfd2b849').first();
  11  |         this.flexLoc = page.getByRole('tab', { name: "I'm flexible" });
  12  |         this.week1 = page.getByText('A week', { exact: true });
  13  |         this.month1 = page.locator('.fb1145c89b', { hasText: 'Jan' });
  14  |         this.datePick1 = page
  15  |             .getByTestId('searchbox-datepicker-flexible-dates-container')
  16  |             .getByRole('button', { name: 'Select dates' });
  17  | 
  18  |         this.unKnown = page.getByTestId('occupancy-config');
  19  |         this.searchBox = page.locator('#searchbox-horizontal-occupancy-label');
  20  |         this.child1 = page.locator('div').filter({ hasText: /^0$/ }).locator('button').nth(1);
  21  |         this.rechild = page.locator('div').filter({ hasText: /^Children\d+$/ }).locator('button').nth(1);
  22  |         this.button1 = page.locator('div').filter({ hasText: /^1$/ }).locator('button').nth(1);
  23  |         this.room = page.locator('div').filter({ hasText: /^Rooms\d+$/ }).locator('button').nth(1);
  24  |         this.button2 = page.getByRole('button', { name: 'Done' });
  25  |         this.button3 = page.getByRole('button', { name: 'Search' });
  26  | 
  27  |         // Filter Start
  28  |         // In the Filters we need the AI Powered as well. Becauase sometimes filter's undo due to DOM rendering or something like that
  29  |         this.swiming = page.getByTestId("filters-group-label-content").first();
  30  |         this.waitE = page.getByTestId("filters-group-label-content");
  31  |         this.airCondition = page.getByTestId('filters-group-label-content').getByText('Air conditioning').nth(1);
  32  |         this.reRender = page.getByTestId("filters-group-label-content").first();
  33  |         this.kilo = page.getByTestId('filters-group-label-content').getByText('Less than 5 km');
  34  |         //Filters End
  35  | 
  36  |         this.checkC = page.getByTestId("price-and-discounted-price").first();
  37  |         this.prices = page.getByTestId("price-and-discounted-price");
  38  |         this.propertyCards = page.getByTestId("property-card-container");
  39  | 
  40  |     }
  41  | 
  42  |     async goTo() {
  43  |         await this.page.goto('https://www.booking.com/');
  44  |         await expect(this.page).toHaveTitle(/Booking.com/);
  45  |         console.log('Verified Successfully!');
  46  |     }
  47  | 
  48  |     async miscSTeps() {
  49  |         await this.dismiss1.click();
  50  |         await this.going.pressSequentially("Cox's Bazar");
  51  |         await this.page.waitForTimeout(2000);
  52  |         await this.hardLoc.click();
  53  |         await this.flexLoc.click();
  54  |         await this.week1.click();
  55  |         await this.month1.click();
  56  |         await this.datePick1.click();
  57  |         await this.unKnown.click();
  58  |         await this.searchBox.click();
  59  |     }
  60  | 
  61  |     async childRoom(numberOfChildren, ageDropdowns) {
  62  |         await this.child1.click(); // First child
  63  |         await this.page.waitForTimeout(300);
  64  | 
  65  | 
  66  |         for (let i = 1; i < numberOfChildren; i++) { // Remaining children
  67  |             await this.rechild.click();
  68  |             await this.page.waitForTimeout(300);
  69  |         }
  70  | 
  71  |         for (let i = 0; i < numberOfChildren; i++) {
  72  |             await ageDropdowns.nth(i + 1).selectOption(String(i + 1)); // Select ages: 1, 2, 3...
  73  |         }
  74  | 
  75  | 
  76  |         await this.button1.click(); // First click - text is "1"
  77  |         await this.page.waitForTimeout(300);
  78  | 
  79  | 
  80  |         for (let i = 0; i < 2; i++) { // Remaining clicks
  81  |             await this.room.click();
  82  |             await this.page.waitForTimeout(300);
  83  |         }
  84  |         await this.page.waitForTimeout(300);
  85  |         await this.button2.click();
  86  |         await this.page.waitForTimeout(300);
  87  |         await this.button3.click();
  88  |         await this.page.waitForTimeout(300);
  89  | 
  90  |     }
  91  | 
  92  |     async filtersU() { // In the Filters we need the AI Powered as well. Becauase sometimes filter's undo due to DOM rendering or something like that
  93  | 
> 94  |         await this.swiming.click();
      |                            ^ Error: locator.click: Test timeout of 70000ms exceeded.
  95  |         await this.page.waitForTimeout(2000);
  96  |         await this.waitE.first();
  97  |         await this.airCondition.click();
  98  |         await this.page.waitForTimeout(2000);
  99  |         await this.reRender.waitFor({ state: 'visible' }); // Wait for filters to re-render before clicking distance filter
  100 |         await this.page.waitForTimeout(2000);
  101 |         await this.kilo.click();
  102 |         await this.page.waitForTimeout(2000);
  103 | 
  104 |     }
  105 | 
  106 |     async lowPrice() {
  107 | 
  108 |         // Wait for the first price to be visible
  109 |         await this.page.getByTestId("price-and-discounted-price").first().waitFor();
  110 | 
  111 |         // Grab all prices
  112 |         await this.page.waitForTimeout(400);
  113 | 
  114 |         const prices = await this.page.getByTestId("price-and-discounted-price").allTextContents();
  115 |         console.log('All Prices:', prices);
  116 | 
  117 |         // Get all property cards
  118 |         const propertyCards = this.page.getByTestId("property-card-container");
  119 | 
  120 |         const cardCount = await propertyCards.count();
  121 | 
  122 |         let lowestPrice = Infinity;
  123 |         let lowestPriceIndex = -1;
  124 | 
  125 |         // Loop through each property card
  126 |         for (let i = 0; i < cardCount; i++) {
  127 |             const card = propertyCards.nth(i);
  128 |             const priceText = await card.getByTestId("price-and-discounted-price").textContent();
  129 | 
  130 |             if (priceText) {
  131 |                 const priceNumber = parseInt(
  132 |                     priceText.replace(/[^0-9]/g, '')
  133 |                 );
  134 |                 if (priceNumber < lowestPrice) {
  135 |                     lowestPrice = priceNumber;
  136 |                     lowestPriceIndex = i;
  137 |                 }
  138 |             }
  139 |         }
  140 |         console.log(`Lowest Price: ${lowestPrice}`);
  141 |         return {
  142 |             lowestPrice,
  143 |             lowestPriceIndex
  144 |         };
  145 |     }
  146 | 
  147 |     async openLowestPricedProperty(lowestPriceIndex) {
  148 | 
  149 |         const propertyCards = this.page.getByTestId(
  150 |             "property-card-container"
  151 |         );
  152 | 
  153 |         const [newPage] = await Promise.all([
  154 |             this.page.context().waitForEvent('page'),
  155 |             propertyCards
  156 |                 .nth(lowestPriceIndex)
  157 |                 .getByTestId("availability-cta-btn")
  158 |                 .click()
  159 |         ]);
  160 | 
  161 |         await newPage.waitForLoadState();
  162 |         return newPage;
  163 |     }
  164 |     async validatePropertyPage(newPage, lowestPrice) {
  165 | 
  166 |         // Wait for new tab to load
  167 |         await newPage.waitForLoadState();
  168 | 
  169 |         const secondPagePriceText = await newPage.locator(".prco-valign-middle-helper").nth(0).textContent();
  170 | 
  171 |         const secondPagePrice = Number(
  172 |             secondPagePriceText.replace(/\D/g, '')
  173 |         );
  174 | 
  175 |         console.log("Second Page Price:", secondPagePrice);
  176 | 
  177 |         // Verify both prices match
  178 |         await expect(secondPagePrice).toBe(lowestPrice);
  179 | 
  180 |         console.log("Both Page Price Matched");
  181 | 
  182 |         // Reserve the property
  183 |         await this.page.waitForTimeout(2000);
  184 |         await newPage.getByRole('link', { name: 'Reserve' }).click();
  185 |         await this.page.waitForTimeout(2000);
  186 |         await newPage.getByRole('button', { name: "I'll reserve" }).click();
  187 |     }
  188 | 
  189 | }
  190 | 
  191 | module.exports = { HotelBook };
```