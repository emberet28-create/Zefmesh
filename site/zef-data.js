/* Zefmesh storefront data + quote-list store. Classic script: sets window.ZEF. */
(function () {
  if (window.ZEF) return;
  const ph = (label) => 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"><defs><pattern id="p" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="26" height="26" fill="#ddd6d5"/><rect width="13" height="26" fill="#d3cbca"/></pattern></defs><rect width="800" height="1000" fill="url(#p)"/><rect x="200" y="468" width="400" height="64" rx="32" fill="#f0eeee"/><text x="400" y="508" text-anchor="middle" font-family="ui-monospace,Menlo,monospace" font-size="22" fill="#4a3336">' + label + '</text></svg>');
  const img = (id, w = 1400, q = 72) =>
    /^ph:/.test(id) ? ph(id.slice(3)) : /^(https?:|data:|blob:)/.test(id) ? id : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
  const fmt = (n) => 'Br ' + Math.round(n).toLocaleString('en-US');

  const ABOUT =
    'Zefmesh Furniture is a furniture manufacturer in Addis Ababa, Ethiopia. It makes office, home and hotel furniture in its own workshop and sells through showrooms at Grand Mall, Megenagna and at Jakros.';

  const CONTACT = {
    phone: '+251 11 668 6979',
    tel: 'tel:+251116686979',
    wa: 'https://wa.me/251941444555',
    waNum: '+251 94 144 4555',
    sales: 'sales@zefmesh.com',
  };

  const SHOWROOMS = [
    {
      key: 'grand-mall',
      name: 'Grand Mall showroom',
      area: 'Megenagna',
      addr: 'Grand Mall, Megenagna, Addis Ababa',
      how: 'Inside Grand Mall at Megenagna roundabout. Parking in the mall basement.',
      hours: 'Mon–Sat 9:00–19:00 · Sun 10:00–17:00',
      open: [9, 19],
      sun: [10, 17],
      img: '1587702068694-a909ef4aa346',
      map: 'https://www.google.com/maps/search/?api=1&query=Grand+Mall+Megenagna+Addis+Ababa',
      embed: 'https://www.google.com/maps?q=Grand%20Mall%20Megenagna%20Addis%20Ababa&output=embed',
      shows: ['office', 'living-room', 'dining'],
    },
    {
      key: 'jakros',
      name: 'Jakros showroom',
      area: 'Jakros',
      addr: 'EBM building, Jakros, Addis Ababa',
      how: 'Ground floor of the EBM building at Jakros, on the main road towards CMC.',
      hours: 'Mon–Sat 9:00–19:00 · Sun 10:00–17:00',
      open: [9, 19],
      sun: [10, 17],
      img: '1538688525198-9b88f6f53126',
      map: 'https://www.google.com/maps/search/?api=1&query=Jakros+Addis+Ababa',
      embed: 'https://www.google.com/maps?q=Jakros%20Addis%20Ababa&output=embed',
      shows: ['office', 'bedroom', 'hospitality'],
    },
  ];

  const FINISHES = {
    black: ['Black', '#1d1b1b'],
    graphite: ['Graphite', '#55514f'],
    grey: ['Light grey', '#b9b4b1'],
    oat: ['Oat linen', '#D9CDB8'],
    charcoal: ['Charcoal wool', '#4A4744'],
    tan: ['Tan leather', '#A8683F'],
    olive: ['Olive boucle', '#7A7A55'],
    teal: ['Lake teal velvet', '#2f5a5a'],
    wanza: ['Natural wanza', '#B89572'],
    walnut: ['Walnut', '#6E4E37'],
    smoked: ['Smoked', '#3A3835'],
    bleached: ['Bleached', '#E8DFCF'],
  };

  /* ---------------------------------------------------------------- taxonomy */
  const ROOMS = [
    {
      slug: 'office',
      name: 'Office',
      h1: 'Office furniture',
      img: '1600508773950-d522f5bb7606',
      hero: '1497366216548-37526070297c',
      blurb: 'Task seating, executive desks and boardroom tables, made to spec and branded.',
      intro:
        'Zefmesh makes office chairs, desks and conference tables in its Addis Ababa workshop for single offices and full-floor fit-outs. Every piece has an Item ID for tenders and repeat orders. Most office pieces are in stock or ready in one to two weeks, and orders of 10 or more get bulk pricing.',
      faq: [
        ['Do you sell office furniture in bulk?', 'Yes. Bulk pricing starts at 10 units of one piece. Send your list as one quote request and a consultant replies within one working day.'],
        ['Can you put our logo on chairs and desks?', 'Yes. Embroidery on chair backs, debossed leather and laser engraving on wood are all done in our workshop. Branded orders start at 20 units.'],
        ['Do you install office furniture?', 'Our team delivers, assembles and places every piece in Addis Ababa, including at night and on weekends so your office stays open.'],
        ['Can we see office pieces before ordering?', 'Office seating and desks are on display at both showrooms, Grand Mall in Megenagna and Jakros.'],
      ],
    },
    {
      slug: 'living-room',
      name: 'Living room',
      h1: 'Living room furniture',
      img: '1618221195710-dd6b41faaea6',
      hero: '1600121848594-d8644e57abab',
      blurb: 'Sofas, lounge chairs and tables built around how Addis families gather.',
      intro:
        'Sofas, armchairs, coffee tables and storage for Addis Ababa homes, made in the Zefmesh workshop with kiln-dried wanza frames and covers that zip off for washing. Pieces are in stock or made to order in two to six weeks, delivered and assembled by our own team.',
      faq: [
        ['Are sofa covers removable?', 'Most sofa and armchair covers zip off and can be dry-cleaned or gently washed.'],
        ['Can I choose my own fabric?', 'Yes. Pick from the fabric library at the showroom or send us your own fabric for any upholstered piece.'],
        ['How long does a made-to-order sofa take?', 'Two to six weeks depending on the model and fabric. The lead time is on each product page.'],
        ['Do you deliver and assemble?', 'Yes. Our team delivers anywhere in Addis Ababa, carries pieces in, assembles them and takes the packaging away.'],
      ],
    },
    {
      slug: 'bedroom',
      name: 'Bedroom',
      h1: 'Bedroom furniture',
      img: '1571508601891-ca5e7a713859',
      hero: '1505693416388-ac5ce068fe85',
      blurb: 'Solid-wood beds, upholstered headboards and quiet storage.',
      intro:
        'Beds, wardrobes, dressers and nightstands made in solid wanza and upholstered in our Addis Ababa workshop. Beds come in single, double, queen and king sizes with slatted bases that let the mattress breathe. Most bedroom pieces are made to order in two to four weeks.',
      faq: [
        ['Which bed sizes do you make?', 'Single, double, queen and king. Custom sizes are possible for any bed frame.'],
        ['Do beds come with a mattress?', 'No, frames are sold without mattresses. Our consultants can recommend sizes that match.'],
        ['Can wardrobes be made to fit an alcove?', 'Yes. Send the measurements with your quote request and we will confirm the size and price.'],
        ['Where can I see the beds?', 'Bedroom furniture is on display at the Jakros showroom.'],
      ],
    },
    {
      slug: 'dining',
      name: 'Dining',
      h1: 'Dining furniture',
      img: '1604014237800-1c9102c219da',
      hero: '1617806118233-18e1de247200',
      blurb: 'Tables that seat the whole family on Sunday, and the chairs to match.',
      intro:
        'Dining tables for four to ten people, dining chairs, counter stools and sideboards in solid wanza, made in the Zefmesh workshop in Addis Ababa. Chairs and stools are also sold in sets for restaurants and cafés. Tables are made to order in three to four weeks.',
      faq: [
        ['How many people does each table seat?', 'Each table page lists the seats. The Fasil table seats eight comfortably and ten for holidays.'],
        ['Can I order chairs in a set?', 'Yes. Add the chair with the quantity you need. Ten or more get bulk pricing.'],
        ['Is solid wood affected by the dry season?', 'Wanza moves slightly between Bega and Kiremt. Re-oiling twice a year keeps it stable.'],
        ['Where can I see dining furniture?', 'Dining tables and chairs are on display at Grand Mall, Megenagna.'],
      ],
    },
    {
      slug: 'hospitality',
      name: 'Hospitality',
      h1: 'Hotel and restaurant furniture',
      img: '1587702068694-a909ef4aa346',
      hero: '1566665797739-1674de7a421a',
      blurb: 'Lobby seating, guest rooms and restaurant furniture for hotels and cafés.',
      intro:
        'Contract-grade furniture for hotels, restaurants and event spaces across Ethiopia: guest-room beds and casegoods, lobby seating, restaurant chairs and banquet furniture. Everything is made in our Addis Ababa workshop, can be finished in your brand colours, and is delivered and installed by our team.',
      faq: [
        ['Do you furnish hotels outside Addis Ababa?', 'Yes. We deliver and install in regional cities. Lead times and fees are confirmed in your quote.'],
        ['Is the seating contract grade?', 'Lobby and restaurant seating uses contract-grade fabric and fire-retardant foam built for heavy daily use.'],
        ['Can you match our brand colours?', 'Yes. Fabrics, leather and wood finishes can be matched to your brand guide.'],
        ['Can we get a sample room first?', 'For guest-room orders we can furnish one sample room for approval before the full order.'],
      ],
    },
  ];

  ROOMS.splice(4, 0, {
      slug: 'kitchen',
      name: 'Kitchen',
      h1: 'Kitchen cabinets and sets',
      img: '1702865071803-cb154cd45f48',
      hero: '1702865071803-cb154cd45f48',
      blurb: 'Kitchen sets, base and wall cabinets, drawers and pantry units, built to your measurements.',
      intro: 'Zefmesh builds kitchens in its Addis Ababa workshop: complete kitchen sets, base cabinets with drawers, wall cabinets and tall pantry units. Every kitchen is made to the measurements of your room, with a drawing for approval before production and installation by our own team.',
      faq: [
        ['Do you make kitchens to measure?', 'Yes. Every kitchen is built to your room. We measure on site in Addis Ababa, send a drawing for approval and then start production.'],
        ['Can I order single cabinets?', 'Yes. Base cabinets, wall cabinets and pantry units can be ordered on their own or as a full set.'],
        ['Which finishes are available?', 'Melamine, wood veneer and lacquer in a range of colours. Samples are at the Grand Mall showroom.'],
        ['Do you install the kitchen?', 'Yes. Our team delivers, fits and levels every unit and fits the handles.'],
      ],
    });

  /* groups + sub-categories; `use`/`mat` feed the comparison tables */
  const GROUPS = {
    office: [
      ['seating', 'Seating', 'Office seating', '1592078615290-033ee584e267',
        'Office chairs made in Addis Ababa: executive chairs for managers, task chairs for long days at a desk, conference chairs for boardrooms and guest chairs for reception. Each chair lists its back height, upholstery and adjustments, and every model can be branded with your logo from 20 units.',
        ['back', 'uph'],
        [
          ['executive-chairs', 'Executive chairs', 'Managers’ offices and boardrooms', 'Leather, PU leather or mesh; aluminium base'],
          ['task-chairs', 'Task & operator chairs', 'Eight-hour desk work and call centres', 'Mesh back, fabric seat, nylon base'],
          ['conference-chairs', 'Conference chairs', 'Meeting rooms and boardrooms', 'Mesh or leather, fixed or swivel'],
          ['guest-chairs', 'Guest & visitor chairs', 'Reception, waiting areas, offices', 'Fabric or PU, steel or wood frame'],
        ]],
      ['desks-tables', 'Desks & tables', 'Office desks and tables', '1497366811353-6870744d04b2',
        'Desks and tables for every room in an office: executive desks with returns and cable management, straight and L-shape office desks, and conference tables from six to twelve seats. Tops come in wood veneer or melamine, and sizes can be adjusted to fit your floor plan.',
        ['width', 'seats'],
        [
          ['executive-desks', 'Executive desks', 'Directors’ and managers’ offices', 'Wood veneer or solid wanza, leather inlay'],
          ['office-desks', 'Office desks', 'Open-plan and private offices', 'Melamine or veneer top, steel frame'],
          ['conference-tables', 'Conference tables', 'Boardrooms and meeting rooms', 'Veneer top, cable box, solid base'],
          ['reception-desks', 'Reception desks', 'Front desks and receptions', 'Veneer and solid surface'],
        ]],
    ],
    'living-room': [
      ['sofas-chairs', 'Sofas & chairs', 'Sofas and armchairs', '1555041469-a586c61ea9bc',
        'Sofas and armchairs built on kiln-dried wanza frames with pocket-sprung or high-resilience seats. Choose a fabric or leather from the library at the showroom, or send your own. Most covers zip off for washing, and every frame is joined and glued in our Addis Ababa workshop.',
        ['uph'],
        [
          ['3-seat-sofas', '3-seat sofas', 'Main living rooms', 'Wanza frame, linen, velvet or leather'],
          ['armchairs', 'Armchairs', 'Reading corners and pairs by the sofa', 'Wanza frame, fabric or leather'],
        ]],
      ['tables', 'Tables', 'Coffee and side tables', '1560185007-5f0bb1866cab',
        'Coffee tables, side tables and console tables in solid wanza with an oiled finish. Tops are thick and softly chamfered so they wear well with daily use. Tables are in stock or made in one to three weeks.',
        ['width'],
        [
          ['coffee-tables', 'Coffee tables', 'In front of the sofa', 'Solid wanza, oiled'],
          ['side-tables', 'Side tables', 'Beside sofas and beds', 'Solid wanza, oiled'],
          ['console-tables', 'Console tables', 'Entrances and behind sofas', 'Solid wanza, steel'],
        ]],
      ['storage', 'Storage & media', 'Living room storage', '1595428774223-ef52624120d2',
        'TV units, bookcases and sideboards in solid wanza, with cane or timber doors and adjustable shelves. Media units have cable routing at the back and cane fronts that let remote controls work through them.',
        [],
        [
          ['tv-units', 'TV & media units', 'Under the TV', 'Solid wanza, cane doors'],
          ['bookcases', 'Bookcases & shelving', 'Books and display', 'Solid wanza, adjustable shelves'],
          ['sideboards', 'Sideboards', 'Living and dining rooms', 'Solid wanza, soft-close doors'],
        ]],
      ['lighting-rugs', 'Lighting & rugs', 'Lighting and rugs', '1524758631624-e2822e304c36',
        'Floor and table lamps with linen shades and weighted bases, chosen to sit with Zefmesh sofas and tables.',
        [],
        [['lamps', 'Floor & table lamps', 'Reading and ambient light', 'Steel, linen shade']]],
    ],
    bedroom: [
      ['beds', 'Beds', 'Beds', '1505693416388-ac5ce068fe85',
        'Bed frames in solid wanza or upholstered with tall headboards, in double, queen and king sizes. Every frame has a slatted base that lets the mattress breathe, and custom sizes can be made to order.',
        ['size'],
        [
          ['double-beds', 'Double beds', 'Guest rooms and smaller bedrooms', 'Solid wanza'],
          ['queen-beds', 'Queen beds', 'Main bedrooms', 'Upholstered headboard, wanza slats'],
          ['king-beds', 'King beds', 'Large main bedrooms', 'Solid wanza or upholstered'],
        ]],
      ['storage', 'Bedroom storage', 'Bedroom storage', '1611486212557-88be5ff6f941',
        'Wardrobes, dressers and nightstands in solid wanza with soft-close drawers. Wardrobes can be made to fit an alcove or a full wall.',
        [],
        [
          ['wardrobes', 'Wardrobes', 'Hanging and folded clothes', 'Solid wanza, veneer panels'],
          ['dressers', 'Dressers & chests', 'Folded clothes', 'Solid wanza, soft-close drawers'],
          ['nightstands', 'Nightstands', 'Beside the bed', 'Solid wanza'],
        ]],
    ],
    dining: [
      ['tables', 'Dining tables', 'Dining tables', '1617806118233-18e1de247200',
        'Dining tables in solid wanza for four, six and eight or more people, with thick tops and no apron to knock your knees. Tables are made to order in three to four weeks and can be sized to your room.',
        ['seats'],
        [
          ['4-seat', '4-seat tables', 'Apartments and kitchens', 'Solid wanza'],
          ['6-seat', '6-seat tables', 'Family dining rooms', 'Solid wanza'],
          ['8-seat', '8+ seat tables', 'Large families and holidays', 'Solid wanza'],
        ]],
      ['chairs-stools', 'Chairs & stools', 'Dining chairs and stools', '1487015307662-6ce6210680f1',
        'Dining chairs, counter stools and benches in steam-bent and solid wanza. Sold singly or in sets, with bulk pricing for restaurants from ten pieces.',
        [],
        [
          ['dining-chairs', 'Dining chairs', 'Around the table', 'Steam-bent wanza'],
          ['bar-stools', 'Bar & counter stools', 'Kitchen counters and cafés', 'Solid wanza'],
          ['benches', 'Benches', 'One side of a table', 'Solid wanza'],
        ]],
    ],
    kitchen: [
      ['units', 'Kitchen units', 'Kitchen sets and cabinets', 'ph:Kitchen units',
        'Kitchen sets and individual cabinets built in our workshop to the measurements of your kitchen. Choose melamine, veneer or lacquer fronts and soft-close hinges and drawers.',
        [],
        [
          ['kitchen-sets', 'Kitchen sets', 'Complete kitchens', 'Melamine, veneer or lacquer, made to measure'],
          ['base-cabinets', 'Base cabinets & drawers', 'Under the worktop', 'Melamine carcass, soft-close drawers'],
          ['wall-cabinets', 'Wall & tall units', 'Above the worktop and pantries', 'Melamine carcass, lift-up or hinged doors'],
        ]],
    ],
    hospitality: [
      ['guest-rooms', 'Guest rooms', 'Hotel guest-room furniture', '1631049307264-da0ec9d70304',
        'Hotel bed sets and guest-room casegoods built for fast room turnover, with integrated headboard panels and hard-wearing finishes.',
        [],
        [['hotel-bed-sets', 'Hotel bed sets', 'Guest rooms', 'Panel headboard, hotel-spec base']]],
      ['lobby', 'Lobby & reception', 'Lobby and reception furniture', '1538688525198-9b88f6f53126',
        'Contract-grade lobby sofas and lounge seating for hotels and offices, tested for heavy daily use.',
        [],
        [['lobby-seating', 'Lobby seating', 'Hotel lobbies and lounges', 'Contract fabric, fire-retardant foam']]],
      ['restaurant', 'Restaurant & café', 'Restaurant and café furniture', '1519710164239-da123dc03ef4',
        'Restaurant tables and chairs in solid wanza and steel, sold in sets with bulk pricing from ten pieces.',
        [],
        [
          ['restaurant-tables', 'Restaurant tables', 'Restaurants and cafés', 'Wanza top, steel base'],
          ['restaurant-chairs', 'Restaurant chairs', 'Restaurants and cafés', 'Steam-bent wanza'],
        ]],
    ],
  };

  /* --------------------------------------------------------------- products */
  // [slug, name, sku, room, group, sub, img, alt[], price|null, off%, show, finishes[], lead, stock, display[], [w,d,h], materials, desc, tags[], extra{}]
  const P = [
    ['executive-mesh-chair-high-back', 'Executive mesh chair, high back', 'ZMOF-0770', 'office', 'seating', 'executive-chairs', '1592078615290-033ee584e267', ['1600508773950-d522f5bb7606', '1497366811353-6870744d04b2'], 18900, 0, true, ['black', 'graphite'], '1 week', 'In stock', ['grand-mall', 'jakros'], [68, 66, 122], 'Mesh back, moulded foam seat, synchro-tilt, polished aluminium base', 'A tall mesh chair for long days in the corner office. The back follows your spine, the headrest adjusts, and the tilt locks in four positions.', ['bestseller', 'bulk', 'brand'], { back: 'high', uph: 'mesh' }],
    ['kality-leather-executive-chair', 'Kality leather executive chair', 'ZMOF-0712', 'office', 'seating', 'executive-chairs', '1688578735427-994ecdea3ea4', ['1600508773950-d522f5bb7606'], 34500, 20, true, ['black', 'tan'], '1–2 weeks', 'In stock', ['grand-mall'], [70, 70, 120], 'Ethiopian leather, synchro-tilt, aluminium base', 'A high-back chair for directors and the boardroom, upholstered in leather tanned in Modjo.', ['bulk', 'brand'], { back: 'high', uph: 'leather' }],
    ['executive-chair-mid-back', 'Executive chair, mid back', 'ZMOF-0734', 'office', 'seating', 'executive-chairs', '1592078615290-033ee584e267', ['1497366216548-37526070297c'], null, 0, false, ['black', 'graphite'], '1–2 weeks', 'In stock', ['jakros'], [66, 64, 108], 'PU leather, fixed arms, chrome base', 'The executive profile at desk height, for managers who share a room or sit at a meeting table.', ['bulk'], { back: 'mid', uph: 'leather' }],
    ['kality-task-chair', 'Kality task chair', 'ZMOF-0420', 'office', 'seating', 'task-chairs', '1688578735427-994ecdea3ea4', ['1497366811353-6870744d04b2'], null, 0, false, ['black', 'grey'], '1 week', 'In stock', ['grand-mall', 'jakros'], [64, 62, 98], 'Mesh back, adjustable lumbar, seat-depth adjust, nylon base', 'The chair most Zefmesh office fit-outs start with. Mesh back, seat-depth adjust, and your logo embroidered on request.', ['bestseller', 'bulk', 'brand'], { back: 'mid', uph: 'mesh' }],
    ['mesh-operator-chair', 'Mesh operator chair', 'ZMOF-0455', 'office', 'seating', 'task-chairs', '1592078615290-033ee584e267', ['1497366216548-37526070297c'], null, 0, false, ['black'], '1 week', 'In stock', ['jakros'], [60, 58, 96], 'Mesh back, fabric seat, nylon base', 'A light, breathable chair for call centres and open-plan rows. Stacks of 50 ship within the week.', ['bulk'], { back: 'mid', uph: 'mesh' }],
    ['ergonomic-task-chair-headrest', 'Ergonomic task chair with headrest', 'ZMOF-0468', 'office', 'seating', 'task-chairs', '1688578735427-994ecdea3ea4', ['1600508773950-d522f5bb7606'], 16400, 15, true, ['black', 'graphite'], '1–2 weeks', 'In stock', ['grand-mall'], [66, 64, 124], 'Mesh back, 3D arms, adjustable headrest and lumbar', 'Every adjustment a full-time desk worker asks for: headrest, lumbar, 3D arms, seat depth and tilt tension.', ['new', 'bulk'], { back: 'high', uph: 'mesh' }],
    ['boardroom-chair-low-back', 'Boardroom chair, low back', 'ZMOF-0910', 'office', 'seating', 'conference-chairs', '1592078615290-033ee584e267', ['1600508773950-d522f5bb7606'], null, 0, false, ['black', 'tan'], '2–3 weeks', 'Made to order', ['grand-mall'], [60, 60, 88], 'PU leather, swivel, chrome base', 'A low back keeps sight lines clear across a boardroom table. Swivel and tilt, no height lever to fiddle with.', ['bulk', 'brand'], { back: 'low', uph: 'leather' }],
    ['mesh-conference-chair', 'Mesh conference chair', 'ZMOF-0925', 'office', 'seating', 'conference-chairs', '1688578735427-994ecdea3ea4', ['1497366216548-37526070297c'], null, 0, false, ['black', 'grey'], '1–2 weeks', 'In stock', ['jakros'], [60, 58, 92], 'Mesh back, fabric seat, swivel', 'A lighter conference chair for meeting rooms used all day.', ['bulk'], { back: 'mid', uph: 'mesh' }],
    ['cantilever-meeting-chair', 'Cantilever meeting chair', 'ZMOF-0940', 'office', 'seating', 'conference-chairs', '1487015307662-6ce6210680f1', ['1519710164239-da123dc03ef4'], null, 0, false, ['black', 'oat'], '2–3 weeks', 'Made to order', ['grand-mall'], [56, 58, 84], 'Chrome cantilever frame, upholstered seat and back', 'A sprung cantilever frame with a slight give. Stacks four high.', ['new', 'bulk'], { back: 'low', uph: 'fabric' }],
    ['guest-chair-with-arms', 'Guest chair with arms', 'ZMOF-1105', 'office', 'seating', 'guest-chairs', '1580480055273-228ff5388ef8', ['1556228453-efd6c1ff04f6'], null, 0, false, ['charcoal', 'oat'], '1–2 weeks', 'In stock', ['grand-mall', 'jakros'], [58, 56, 84], 'Fabric upholstery, hardwood frame', 'A compact upholstered chair for the visitor side of a desk.', ['bulk'], { back: 'mid', uph: 'fabric' }],
    ['stacking-visitor-chair', 'Stacking visitor chair', 'ZMOF-1120', 'office', 'seating', 'guest-chairs', '1487015307662-6ce6210680f1', ['1519710164239-da123dc03ef4'], 4200, 0, true, ['black', 'grey'], '1 week', 'In stock', ['jakros'], [52, 54, 80], 'Steel frame, polypropylene shell', 'Stacks ten high for training rooms, halls and waiting areas.', ['bulk'], { back: 'low', uph: 'fabric' }],
    ['two-seat-waiting-bench', 'Two-seat waiting bench', 'ZMOF-1150', 'office', 'seating', 'guest-chairs', '1503602642458-232111445657', ['1538688525198-9b88f6f53126'], null, 0, false, ['black', 'tan'], '2–3 weeks', 'Made to order', ['jakros'], [120, 60, 80], 'PU leather on steel beam', 'Beam seating for bank halls and clinics. Two, three or four seats on one beam.', ['bulk', 'brand'], { back: 'mid', uph: 'leather' }],
    ['axum-executive-desk', 'Axum executive desk', 'ZMOF-2010', 'office', 'desks-tables', 'executive-desks', '1497366811353-6870744d04b2', ['1497366216548-37526070297c'], null, 0, false, ['wanza', 'walnut'], '6–8 weeks', 'Made to order', ['grand-mall'], [200, 90, 75], 'Solid wanza, leather writing inlay, cable management', 'A heavy desk with a leather writing inlay and hidden cable trays. Made to order in any size.', ['brand'], { width: 200 }],
    ['executive-l-shape-desk', 'Executive L-shape desk', 'ZMOF-2035', 'office', 'desks-tables', 'executive-desks', '1497366216548-37526070297c', ['1600508773950-d522f5bb7606'], null, 0, false, ['walnut', 'smoked'], '3–4 weeks', 'Made to order', ['jakros'], [180, 160, 75], 'Wood veneer, mobile pedestal, cable box', 'A main desk with a side return and a three-drawer mobile pedestal. Left- or right-hand return.', ['bulk'], { width: 180 }],
    ['walnut-executive-desk', 'Walnut executive desk with return', 'ZMOF-2048', 'office', 'desks-tables', 'executive-desks', '1524758631624-e2822e304c36', ['1497366811353-6870744d04b2'], 72000, 10, true, ['walnut'], '3–4 weeks', 'Made to order', ['grand-mall'], [190, 170, 75], 'Walnut veneer, solid edge, cable management', 'Walnut veneer with a solid timber edge and a return that holds a printer and files.', ['new'], { width: 190 }],
    ['straight-office-desk-140', 'Straight office desk, 140 cm', 'ZMOF-2210', 'office', 'desks-tables', 'office-desks', '1497366216548-37526070297c', ['1497366811353-6870744d04b2'], null, 0, false, ['bleached', 'walnut'], '1–2 weeks', 'In stock', ['grand-mall', 'jakros'], [140, 70, 75], 'Melamine top, powder-coated steel frame', 'The standard desk for open-plan offices. 120, 140 and 160 cm widths.', ['bestseller', 'bulk'], { width: 140 }],
    ['l-shape-office-desk', 'L-shape office desk', 'ZMOF-2225', 'office', 'desks-tables', 'office-desks', '1497366811353-6870744d04b2', ['1524758631624-e2822e304c36'], null, 0, false, ['bleached', 'smoked'], '1–2 weeks', 'In stock', ['jakros'], [160, 140, 75], 'Melamine top, steel frame, cable tray', 'An L-shape for supervisors and anyone who needs two monitors and paper.', ['bulk'], { width: 160 }],
    ['two-person-desk', 'Two-person desk', 'ZMOF-2240', 'office', 'desks-tables', 'office-desks', '1600508773950-d522f5bb7606', ['1497366216548-37526070297c'], null, 0, false, ['bleached'], '2–3 weeks', 'Made to order', ['grand-mall'], [140, 140, 75], 'Melamine top, shared steel frame, privacy screen', 'Two people face to face on one frame, with a fabric screen between them.', ['new', 'bulk'], { width: 140 }],
    ['boardroom-table-10-seat', 'Boardroom table, 10 seats', 'ZMOF-2510', 'office', 'desks-tables', 'conference-tables', '1600508773950-d522f5bb7606', ['1497366216548-37526070297c'], null, 0, false, ['walnut', 'smoked'], '4–6 weeks', 'Made to order', ['grand-mall'], [360, 120, 75], 'Wood veneer, two cable boxes, panel base', 'A long table for ten with power and data boxes set into the top.', ['brand'], { width: 360, seats: 10 }],
    ['oval-conference-table-8-seat', 'Oval conference table, 8 seats', 'ZMOF-2525', 'office', 'desks-tables', 'conference-tables', '1497366216548-37526070297c', ['1600508773950-d522f5bb7606'], null, 0, false, ['walnut', 'bleached'], '3–4 weeks', 'Made to order', ['jakros'], [280, 120, 75], 'Wood veneer, cable box', 'Rounded ends so everyone can see each other.', [], { width: 280, seats: 8 }],
    ['modular-conference-table', 'Modular conference table', 'ZMOF-2540', 'office', 'desks-tables', 'conference-tables', '1497366811353-6870744d04b2', ['1524758631624-e2822e304c36'], null, 0, false, ['bleached', 'smoked'], '2–3 weeks', 'Made to order', ['grand-mall'], [240, 120, 75], 'Melamine modules on steel legs', 'Modules that join into a long table, a U or a square for training days.', ['bulk'], { width: 240, seats: 8 }],

    ['axum-reception-desk', 'Axum reception desk', 'ZMOF-2610', 'office', 'desks-tables', 'reception-desks', 'ph:Reception desk', ['1497366216548-37526070297c'], null, 0, false, ['walnut', 'bleached'], '4–6 weeks', 'Made to order', ['grand-mall'], [240, 80, 110], 'Wood veneer front, solid-surface top, cable management', 'A front desk with a raised counter for visitors and a lower work surface behind it. Made to the size of your reception.', ['brand'], { width: 240 }],
    ['made-to-measure-kitchen', 'Made-to-measure kitchen set', 'ZMKT-0100', 'kitchen', 'units', 'kitchen-sets', 'ph:Kitchen set', ['1702865071803-cb154cd45f48'], null, 0, false, ['bleached', 'walnut', 'smoked'], '4–6 weeks', 'Made to order', ['grand-mall'], [300, 60, 220], 'Melamine carcass, veneer or lacquer fronts, soft-close hinges and drawers', 'Base cabinets, wall cabinets and a tall unit built to the measurements of your kitchen. We measure on site and send a drawing for approval first.', ['brand'], {}],
    ['base-cabinet-three-drawers', 'Base cabinet with three drawers', 'ZMKT-0210', 'kitchen', 'units', 'base-cabinets', 'ph:Base cabinet', ['1702865071803-cb154cd45f48'], null, 0, false, ['bleached', 'walnut'], '2–3 weeks', 'Made to order', ['grand-mall'], [60, 58, 86], 'Melamine carcass, soft-close drawer runners', 'A base unit with three deep drawers for pans and cutlery. Widths from 40 to 90 cm.', [], { width: 60 }],
    ['base-cabinet-two-doors', 'Base cabinet with two doors', 'ZMKT-0220', 'kitchen', 'units', 'base-cabinets', 'ph:Base cabinet', ['1702865071803-cb154cd45f48'], null, 0, false, ['bleached', 'walnut', 'smoked'], '2–3 weeks', 'Made to order', ['grand-mall'], [80, 58, 86], 'Melamine carcass, adjustable shelf, soft-close hinges', 'A two-door base unit with an adjustable shelf, sized to fit under a standard worktop.', [], { width: 80 }],
    ['wall-cabinet', 'Wall cabinet', 'ZMKT-0230', 'kitchen', 'units', 'wall-cabinets', 'ph:Wall cabinet', ['1702865071803-cb154cd45f48'], null, 0, false, ['bleached', 'walnut', 'smoked'], '2–3 weeks', 'Made to order', ['grand-mall'], [80, 32, 72], 'Melamine carcass, lift-up or hinged doors', 'A wall unit with two shelves. Lift-up doors are available for units above the cooker.', [], { width: 80 }],
    ['tall-pantry-unit', 'Tall pantry unit', 'ZMKT-0250', 'kitchen', 'units', 'wall-cabinets', 'ph:Pantry unit', ['1702865071803-cb154cd45f48'], null, 0, false, ['bleached', 'walnut'], '3–4 weeks', 'Made to order', ['grand-mall'], [60, 58, 210], 'Melamine carcass, five adjustable shelves', 'A floor-to-ceiling pantry with adjustable shelves and an optional pull-out rack.', [], { width: 60 }],

    ['sheger-3-seat-sofa', 'Sheger 3-seat sofa', 'ZMLV-0105', 'living-room', 'sofas-chairs', '3-seat-sofas', '1555041469-a586c61ea9bc', ['1583847268964-b28dc8f51f92', '1618221195710-dd6b41faaea6', '1560448204-e02f11c3d0e2'], 86500, 25, true, ['oat', 'charcoal', 'olive'], '2–3 weeks', 'In stock', ['grand-mall'], [228, 96, 82], 'Kiln-dried wanza frame, pocket-sprung seat, removable linen covers', 'A deep, low sofa for long evenings. The frame is joined and glued in our Addis workshop, the cushions are pocket-sprung, and every cover zips off for washing.', ['bestseller'], { uph: 'fabric' }],
    ['arba-leather-sofa', 'Arba leather sofa', 'ZMLV-0112', 'living-room', 'sofas-chairs', '3-seat-sofas', '1540574163026-643ea20ade25', ['1618220179428-22790b461013', '1600210492486-724fe5c67fb0'], null, 0, false, ['tan', 'black'], '4–6 weeks', 'Made to order', ['grand-mall'], [214, 92, 80], 'Full-grain Ethiopian leather, solid wanza base', 'Channel-stitched cushions in full-grain leather tanned in Modjo.', ['new'], { uph: 'leather' }],
    ['wenchi-velvet-sofa', 'Wenchi velvet sofa', 'ZMLV-0118', 'living-room', 'sofas-chairs', '3-seat-sofas', '1630585308572-f53438fc684f', ['1664711942326-2c3351e215e6'], 78500, 20, true, ['teal', 'charcoal'], '2–3 weeks', 'In stock', ['jakros'], [206, 94, 78], 'Performance velvet, hardwood frame', 'Crater-lake teal in a stain-resistant performance velvet. Rounded arms, a deep seat, and room for three.', [], { uph: 'fabric' }],
    ['entoto-lounge-chair', 'Entoto lounge chair', 'ZMLV-0210', 'living-room', 'sofas-chairs', 'armchairs', '1586023492125-27b2c045efd7', ['1600210492486-724fe5c67fb0', '1618220179428-22790b461013'], null, 0, false, ['wanza', 'oat'], '4–6 weeks', 'Made to order', ['grand-mall'], [78, 84, 76], 'Solid wanza, woven cotton back, feather-wrapped seat', 'Named for the hills above the city. A reclined chair with a hand-shaped wanza frame.', ['new'], { uph: 'fabric' }],
    ['bale-armchair', 'Bale armchair', 'ZMLV-0222', 'living-room', 'sofas-chairs', 'armchairs', '1580480055273-228ff5388ef8', ['1618220179428-22790b461013', '1556228453-efd6c1ff04f6'], 29500, 30, true, ['olive', 'tan', 'oat'], '2–3 weeks', 'In stock', ['jakros'], [82, 80, 84], 'Hardwood frame, high-resilience foam, fabric or leather', 'A compact armchair with a tall back and tight seat, in any fabric from the library or your own.', ['brand'], { uph: 'fabric' }],
    ['lalibela-accent-chair', 'Lalibela accent chair', 'ZMLV-0230', 'living-room', 'sofas-chairs', 'armchairs', '1567538096630-e0c55bd6374c', ['1556228453-efd6c1ff04f6'], null, 0, false, ['oat', 'charcoal'], '1–2 weeks', 'In stock', ['grand-mall'], [60, 62, 80], 'Button-tufted upholstery, turned legs', 'A small tufted chair for a corner, a dressing table or the end of a bed.', [], { uph: 'fabric' }],
    ['tana-coffee-table', 'Tana coffee table', 'ZMLV-0305', 'living-room', 'tables', 'coffee-tables', '1560185007-5f0bb1866cab', ['1616486338812-3dadae4b4ace', '1600121848594-d8644e57abab'], null, 0, false, ['wanza', 'walnut'], '2–3 weeks', 'In stock', ['grand-mall'], [120, 70, 38], 'Solid wanza top, turned legs', 'Low and wide like the lake it is named after, finished in hard-wearing oil.', ['bestseller'], { width: 120 }],
    ['harar-side-table', 'Harar side table', 'ZMLV-0320', 'living-room', 'tables', 'side-tables', '1523755231516-e43fd2e8dca5', ['1611486212557-88be5ff6f941'], 12800, 15, true, ['wanza', 'smoked'], '1–2 weeks', 'In stock', ['grand-mall', 'jakros'], [45, 45, 52], 'Solid wanza, oiled', 'A small table with a thick, chamfered top. Stack two for a nesting set.', [], { width: 45 }],
    ['koka-console-table', 'Koka console table', 'ZMLV-0340', 'living-room', 'tables', 'console-tables', '1616486338812-3dadae4b4ace', ['1600607687939-ce8a6c25118c'], null, 0, false, ['wanza', 'smoked'], '2–3 weeks', 'Made to order', ['grand-mall'], [140, 38, 80], 'Solid wanza top, blackened steel frame', 'A narrow table for an entrance or behind a sofa.', ['new'], { width: 140 }],
    ['awash-media-console', 'Awash media console', 'ZMLV-0405', 'living-room', 'storage', 'tv-units', '1653971858526-97f2ba1914c4', ['1600607687939-ce8a6c25118c', '1616486338812-3dadae4b4ace'], 44600, 10, true, ['wanza', 'walnut'], '2–3 weeks', 'In stock', ['grand-mall'], [180, 45, 55], 'Solid wanza, cane-front doors, soft-close hinges', 'A long, low console with cane doors that let remotes work through them.', [], { width: 180 }],
    ['simien-bookshelf', 'Simien bookshelf', 'ZMLV-0420', 'living-room', 'storage', 'bookcases', '1595428774223-ef52624120d2', ['1544691560-fc2053d97726'], null, 0, false, ['wanza'], '2–3 weeks', 'Made to order', ['jakros'], [90, 36, 210], 'Solid wanza, adjustable shelves', 'Tall and stepped like the mountains, with a closed base for things you do not want on display.', ['new'], { width: 90 }],
    ['omo-floor-lamp', 'Omo floor lamp', 'ZMLV-0610', 'living-room', 'lighting-rugs', 'lamps', '1524758631624-e2822e304c36', ['1618221195710-dd6b41faaea6'], 14200, 0, true, ['black', 'oat'], '1 week', 'In stock', ['grand-mall'], [40, 40, 165], 'Powder-coated steel, linen shade', 'A slender reading lamp with a weighted base and a warm linen shade.', [], {}],

    ['abay-upholstered-bed', 'Abay upholstered bed', 'ZMBD-0110', 'bedroom', 'beds', 'queen-beds', '1505693416388-ac5ce068fe85', ['1616627561950-9f746e330187', '1616594039964-ae9021a400a0'], 96000, 15, true, ['oat', 'charcoal'], '3–4 weeks', 'Made to order', ['jakros'], [180, 210, 120], 'Tufted headboard, solid wanza slats', 'A tall tufted headboard and a slatted base that lets the mattress breathe.', [], { size: 'queen' }],
    ['dire-platform-bed', 'Dire platform bed', 'ZMBD-0122', 'bedroom', 'beds', 'double-beds', '1615874959474-d609969a20ed', ['1571508601891-ca5e7a713859'], null, 0, false, ['wanza', 'walnut'], '2–3 weeks', 'Made to order', ['jakros'], [170, 208, 90], 'Solid wanza, low platform', 'Low and solid. The platform extends past the mattress to give you a ledge for books and tea.', ['new'], { size: 'double' }],
    ['ras-king-bed', 'Ras king bed', 'ZMBD-0135', 'bedroom', 'beds', 'king-beds', '1616594039964-ae9021a400a0', ['1505693416388-ac5ce068fe85'], null, 0, false, ['walnut', 'oat'], '3–4 weeks', 'Made to order', ['jakros'], [200, 215, 115], 'Solid wanza, panelled headboard', 'A king frame with a wide panelled headboard and under-bed clearance for storage.', [], { size: 'king' }],
    ['bahir-wardrobe', 'Bahir wardrobe', 'ZMBD-0210', 'bedroom', 'storage', 'wardrobes', '1595428774223-ef52624120d2', ['1616627561950-9f746e330187'], null, 0, false, ['wanza', 'bleached'], '3–4 weeks', 'Made to order', ['jakros'], [160, 60, 210], 'Solid wanza frame, veneer doors', 'Two or three doors with hanging rails, shelves and two drawers.', [], { width: 160 }],
    ['tis-dresser', 'Tis dresser', 'ZMBD-0225', 'bedroom', 'storage', 'dressers', '1611486212557-88be5ff6f941', ['1523755231516-e43fd2e8dca5'], null, 0, false, ['wanza', 'walnut'], '2–3 weeks', 'Made to order', ['jakros'], [120, 48, 82], 'Solid wanza, six soft-close drawers', 'A low, wide chest of six drawers.', [], { width: 120 }],
    ['zeway-nightstand', 'Zeway nightstand', 'ZMBD-0240', 'bedroom', 'storage', 'nightstands', '1611486212557-88be5ff6f941', ['1523755231516-e43fd2e8dca5'], 11600, 0, true, ['wanza', 'walnut'], '1–2 weeks', 'In stock', ['jakros'], [50, 38, 58], 'Solid wanza, open book cubby', 'A cantilevered nightstand with room for books below and a lamp on top.', [], { width: 50 }],

    ['arsi-round-table', 'Arsi round table, 4 seats', 'ZMDN-0104', 'dining', 'tables', '4-seat', '1604014237800-1c9102c219da', ['1519710164239-da123dc03ef4'], null, 0, false, ['wanza', 'walnut'], '2–3 weeks', 'Made to order', ['grand-mall'], [110, 110, 75], 'Solid wanza, pedestal base', 'A round table on a single pedestal so four chairs tuck in easily.', ['new'], { seats: 4 }],
    ['sidamo-dining-table', 'Sidamo dining table, 6 seats', 'ZMDN-0106', 'dining', 'tables', '6-seat', '1519710164239-da123dc03ef4', ['1617806118233-18e1de247200'], null, 0, false, ['wanza', 'smoked'], '3–4 weeks', 'Made to order', ['grand-mall'], [180, 90, 75], 'Solid wanza', 'Six people with elbow room, on four square legs.', [], { seats: 6 }],
    ['fasil-dining-table', 'Fasil dining table, 8 seats', 'ZMDN-0108', 'dining', 'tables', '8-seat', '1617806118233-18e1de247200', ['1604014237800-1c9102c219da', '1519710164239-da123dc03ef4'], null, 0, false, ['wanza', 'walnut'], '3–4 weeks', 'Made to order', ['grand-mall'], [220, 100, 75], 'Solid wanza, splayed legs', 'Seats eight comfortably and ten for holidays, with no apron to knock your knees.', ['bestseller'], { seats: 8 }],
    ['gondar-dining-chair', 'Gondar dining chair', 'ZMDN-0210', 'dining', 'chairs-stools', 'dining-chairs', '1487015307662-6ce6210680f1', ['1519710164239-da123dc03ef4'], 8900, 0, true, ['wanza', 'smoked'], '4–6 weeks', 'Made to order', ['grand-mall'], [48, 52, 80], 'Steam-bent wanza', 'A light, strong chair with a steam-bent back. Sold singly or in sets for restaurants.', ['bulk'], {}],
    ['adwa-counter-stool', 'Adwa counter stool', 'ZMDN-0230', 'dining', 'chairs-stools', 'bar-stools', '1503602642458-232111445657', ['1581539250439-c96689b516dd'], 6400, 0, true, ['wanza'], '1–2 weeks', 'In stock', ['grand-mall'], [38, 38, 65], 'Solid wanza, footrest rails', 'A counter stool with a thumb-hole seat. Bar height available for cafés.', ['bulk'], {}],
    ['debre-dining-bench', 'Debre dining bench', 'ZMDN-0250', 'dining', 'chairs-stools', 'benches', '1519710164239-da123dc03ef4', ['1604014237800-1c9102c219da'], null, 0, false, ['wanza'], '2–3 weeks', 'Made to order', ['grand-mall'], [160, 38, 45], 'Solid wanza', 'A plain bench for one side of a table, sized to match Sidamo and Fasil.', [], { width: 160 }],

    ['sodere-guest-room-bed', 'Sodere guest-room bed', 'ZMHS-0110', 'hospitality', 'guest-rooms', 'hotel-bed-sets', '1631049307264-da0ec9d70304', ['1566665797739-1674de7a421a', '1590490360182-c33d57733427'], null, 0, false, ['walnut', 'oat'], '4–6 weeks', 'Made to order', ['jakros'], [160, 205, 110], 'Panel headboard, hotel-spec base', 'A hotel-spec bed with an integrated headboard panel, built for fast room turnover.', ['bulk', 'brand'], { size: 'queen' }],
    ['langano-lobby-sofa', 'Langano lobby sofa', 'ZMHS-0210', 'hospitality', 'lobby', 'lobby-seating', '1538688525198-9b88f6f53126', ['1587702068694-a909ef4aa346'], null, 0, false, ['charcoal', 'tan'], '4–6 weeks', 'Made to order', ['jakros'], [240, 95, 76], 'Contract-grade fabric, fire-retardant foam', 'Contract-grade seating for lobbies and lounges, tested for heavy daily use.', ['bulk', 'brand'], { uph: 'fabric' }],
    ['cafe-table-70', 'Café table, 70 cm', 'ZMHS-0310', 'hospitality', 'restaurant', 'restaurant-tables', '1604014237800-1c9102c219da', ['1519710164239-da123dc03ef4'], null, 0, false, ['wanza', 'smoked'], '2–3 weeks', 'Made to order', ['grand-mall'], [70, 70, 75], 'Wanza top, cast-iron base', 'A square café table for two, on a heavy base that does not rock.', ['bulk'], { width: 70, seats: 2 }],
  ];

  const IMPORTED = ['executive-mesh-chair-high-back', 'ergonomic-task-chair-headrest', 'mesh-operator-chair', 'mesh-conference-chair', 'cantilever-meeting-chair', 'stacking-visitor-chair', 'two-seat-waiting-bench', 'executive-chair-mid-back', 'omo-floor-lamp', 'cafe-table-70'];
  const PRODUCTS = P.map((r) => {
    const [slug, name, sku, room, group, sub, im, alt, price, off, show, fin, lead, stock, display, dims, materials, desc, tags, extra] = r;
    return {
      slug, name, sku, room, group, sub, img: im, alt, price, off, show: !!(show && price), finishes: fin, lead, stock, display,
      dims: { w: dims[0], d: dims[1], h: dims[2] }, materials, desc, tags, ...extra,
      now: price ? Math.round((price * (1 - off / 100)) / 100) * 100 : null,
      origin: IMPORTED.includes(slug) ? 'imported' : 'made',
    };
  });

  /* build published taxonomy (sub-categories with no products are left out) */
  ROOMS.forEach((r) => {
    r.groups = (GROUPS[r.slug] || []).map(([slug, name, h1, im, intro, filters, subs]) => ({
      slug, name, h1, img: im, intro, filters, room: r.slug,
      subs: subs.map(([s, n, use, mat]) => ({ slug: s, name: n, use, mat, room: r.slug, group: slug })),
    }));
    r.groups.forEach((g) => {
      g.subs = g.subs.filter((s) => PRODUCTS.some((p) => p.room === r.slug && p.group === g.slug && p.sub === s.slug));
      g.subs.forEach((s) => {
        const ps = PRODUCTS.filter((p) => p.room === r.slug && p.group === g.slug && p.sub === s.slug);
        s.count = ps.length;
        s.img = ps[0].img;
        const leads = [...new Set(ps.map((p) => p.lead))];
        s.lead = leads.length === 1 ? leads[0] : leads.sort()[0] + ' to ' + leads.sort().slice(-1)[0];
      });
      g.count = g.subs.reduce((a, s) => a + s.count, 0);
    });
    r.groups = r.groups.filter((g) => g.subs.length);
    r.count = r.groups.reduce((a, g) => a + g.count, 0);
  });

  const SUB_COPY = {
    'executive-chairs': {
      intro: 'Executive chairs are high- or mid-back office chairs for managers, directors and boardrooms, in leather, PU leather or mesh. Zefmesh makes them in Addis Ababa with synchro-tilt mechanisms and aluminium or chrome bases. Most are in stock or ready in one to two weeks, and every model can carry your logo.',
      guide: [
        ['Leather or mesh', 'Leather looks formal and lasts for years with a wipe-down once a month. Mesh stays cooler through a long afternoon and suits offices without air conditioning. Read more on the mesh and leather material pages.'],
        ['Back height', 'A high back with a headrest suits people who recline during calls. A mid back sits lower than a partition or window sill and is the better choice for shared offices and meeting tables.'],
        ['What to check', 'Seat height range, a tilt lock, arm height and the weight rating on the specification table. All Zefmesh executive chairs are rated to at least 120 kg.'],
      ],
    },
    'task-chairs': {
      intro: 'Task chairs are office chairs for people who sit at a desk all day. Zefmesh task chairs have mesh backs, adjustable lumbar support and seat-depth adjustment, and are made in Addis Ababa for open-plan offices, banks and call centres. They are in stock in quantity, with bulk pricing from 10 units.',
      guide: [
        ['Adjustments that matter', 'Seat height, seat depth and lumbar support make the biggest difference over an eight-hour day. Headrests and 3D arms help people who switch between typing and calls.'],
        ['Mesh or fabric', 'A mesh back keeps air moving. A fabric seat is more comfortable than a mesh seat for most people over a full shift.'],
        ['Ordering for a team', 'Add the chair once with the quantity you need. We confirm stock and a delivery date in one reply.'],
      ],
    },
  };

  const subIntro = (s, r) => {
    if (SUB_COPY[s.slug]) return SUB_COPY[s.slug].intro;
    const showrooms = [...new Set(PRODUCTS.filter((p) => p.sub === s.slug && p.room === r.slug).flatMap((p) => p.display))]
      .map((k) => SHOWROOMS.find((x) => x.key === k).name.replace(' showroom', ''))
      .join(' and ');
    return `${s.name} from the Zefmesh workshop in Addis Ababa, for ${s.use.toLowerCase()}. Made in ${s.mat.toLowerCase()}, ready in ${s.lead}. Prices are confirmed within one working day of your request, and pieces are on display at ${showrooms}.`;
  };
  const subGuide = (s) =>
    SUB_COPY[s.slug]?.guide || [
      ['Sizes', `Every ${s.name.toLowerCase().replace(/s$/, '')} lists its width, depth and height in centimetres on the product page. Custom sizes can be made to order.`],
      ['Materials', `${s.mat}. Finishes can be seen and touched at either showroom.`],
      ['Lead time', `In stock pieces arrive in three to five working days in Addis Ababa. Made-to-order pieces take ${s.lead}.`],
    ];

  /* ------------------------------------------------------------- content */
  const COLLECTIONS = [
    { slug: 'gena-2026', name: 'Gena 2026', kicker: 'Seasonal sale', blurb: 'Our holiday edit across five rooms. Up to 30% off until 7 January.', img: '1664711942326-2c3351e215e6' },
    { slug: 'wanza', name: 'Wanza', kicker: 'Solid wood', blurb: 'Tables, shelves and storage in the honey-coloured hardwood of the highlands.', img: '1611486212557-88be5ff6f941' },
    { slug: 'sheger-living', name: 'Sheger Living', kicker: 'Soft seating', blurb: 'Deep sofas and lounge chairs for long evenings and big families.', img: '1618220179428-22790b461013' },
    { slug: 'kality-workspace', name: 'Kality Workspace', kicker: 'Office', blurb: 'Task seating, executive desks and boardroom tables, branded and installed.', img: '1497366811353-6870744d04b2' },
    { slug: 'hotel', name: 'Hotel & Hospitality', kicker: 'Contract', blurb: 'Lobby, lounge and guest-room furniture for hotels across Ethiopia.', img: '1566665797739-1674de7a421a' },
  ];

  const SECTORS = [
    { slug: 'banks', name: 'Banks', needs: 'Teller counters, waiting seating, managers’ offices', img: '1600508773950-d522f5bb7606' },
    { slug: 'government', name: 'Government', needs: 'Offices, meeting rooms, archive storage', img: '1497366216548-37526070297c' },
    { slug: 'hotels', name: 'Hotels', needs: 'Guest rooms, lobbies, restaurants', img: '1566665797739-1674de7a421a' },
    { slug: 'schools', name: 'Schools & universities', needs: 'Lecture seating, staff rooms, libraries', img: '1544691560-fc2053d97726' },
    { slug: 'healthcare', name: 'Healthcare', needs: 'Waiting areas, consulting rooms', img: '1538688525198-9b88f6f53126' },
    { slug: 'ngos', name: 'NGOs', needs: 'Open-plan offices and field offices', img: '1497366811353-6870744d04b2' },
  ];

  const PROJECTS = [
    { slug: 'bank-branches-addis', title: 'Three bank branches, furnished overnight', client: 'Commercial bank', city: 'Bole, Addis Ababa', pieces: 420, year: 2026, img: '1600508773950-d522f5bb7606' },
    { slug: 'hotel-hawassa', title: 'Lobby and 60 guest rooms', client: 'Hotel group', city: 'Hawassa', pieces: 380, year: 2025, img: '1566665797739-1674de7a421a' },
    { slug: 'hq-kirkos', title: 'A 12-floor head office in ten weeks', client: 'Tech company', city: 'Kirkos, Addis Ababa', pieces: 1140, year: 2025, img: '1497366216548-37526070297c' },
  ];

  const GUIDES = [
    { slug: 'how-to-choose-an-office-chair', title: 'How to choose an office chair', kicker: 'Office', time: '7 min', img: '1592078615290-033ee584e267', sum: 'Mesh or leather, back height, and the four adjustments that matter over an eight-hour day.', room: 'office', group: 'seating' },
    { slug: 'l-shape-or-straight-desk', title: 'L-shape or straight desk?', kicker: 'Office', time: '5 min', img: '1497366811353-6870744d04b2', sum: 'How much floor each takes, who needs a return, and what fits a 3 × 3 m office.', room: 'office', group: 'desks-tables' },
    { slug: 'mdf-or-solid-wood', title: 'MDF or solid wood?', kicker: 'Materials', time: '6 min', img: '1611486212557-88be5ff6f941', sum: 'Where each lasts, what each costs to repair, and how the dry season affects them.', room: 'living-room', group: 'storage' },
    { slug: 'choosing-a-family-sofa', title: 'Choosing fabric for a family sofa', kicker: 'Living room', time: '4 min', img: '1618220179428-22790b461013', sum: 'Rub counts, removable covers and the fabrics that forgive children and dogs.', room: 'living-room', group: 'sofas-chairs' },
  ];

  const REVIEWS = [
    { q: 'They furnished three bank branches in a month, installed at night, and nobody noticed until Monday morning.', who: 'Head of Facilities', org: 'Commercial bank, Addis Ababa', at: 'Grand Mall' },
    { q: 'Our sofa has survived two toddlers and a dog. The covers still come off and go straight in the wash.', who: 'Hana T.', org: 'Home customer, CMC', at: 'Jakros' },
    { q: 'Forty lobby seats in our own tan leather, sampled, approved and delivered to Hawassa on schedule.', who: 'Operations Director', org: 'Hotel group, Hawassa', at: 'Jakros' },
  ];

  const PRODUCT_FAQ = [
    ['Why is there no price on some pieces?', 'Prices for most pieces depend on finish, quantity and delivery. Add the piece to your quote list and we reply with an exact price within one working day.'],
    ['Can I pay online?', 'Not yet. Once you accept the quote you pay at a showroom, by bank transfer or on delivery.'],
    ['Can I collect it myself?', 'Yes. Choose pick-up when you send your list and we confirm a collection time at the showroom or workshop.'],
    ['What is covered after delivery?', 'Workmanship faults are repaired by our team. Guarantee terms are listed in your quote.'],
  ];

  /* ------------------------------------------------------------- routing */
  const BUILT = ['Home', 'Shop', 'Products', 'Room', 'Group', 'Category', 'Product', 'Quote', 'Inspiration', 'Article', 'About', 'Contact', 'Help', 'Collections', 'Collection'];
  const href = {
    home: 'Home.dc.html',
    shop: 'Shop.dc.html',
    quote: 'Quote.dc.html',
    products: (q) => 'Products.dc.html' + (q ? '?q=' + encodeURIComponent(q) : ''),
    request: (slug, qty, finish) => 'Quote.dc.html?add=' + encodeURIComponent(slug) + (qty > 1 ? '&qty=' + qty : '') + (finish ? '&finish=' + finish : ''),
    room: (r) => `Room.dc.html?room=${r}`,
    group: (r, g) => `Group.dc.html?room=${r}&group=${g}`,
    sub: (r, g, s) => `Category.dc.html?room=${r}&group=${g}&sub=${s}`,
    product: (slug) => `Product.dc.html?p=${slug}`,
    page: (name, q) => `${name}.dc.html${q ? '?' + q : ''}`,
    article: (slug) => 'Article.dc.html?a=' + slug,
    set: (slug) => 'Collection.dc.html?set=' + slug,
    series: (slug) => 'Collection.dc.html?c=' + slug,
    guide: (slug) => 'Article.dc.html?g=' + slug,
  };
  const isBuilt = (url) => {
    const m = String(url).match(/([A-Za-z]+)\.dc\.html/);
    return !m || BUILT.includes(m[1]);
  };
  const q = (k) => new URLSearchParams(location.search).get(k);

  const room = (s) => ROOMS.find((r) => r.slug === s);
  const group = (r, g) => room(r)?.groups.find((x) => x.slug === g);
  const sub = (r, g, s) => group(r, g)?.subs.find((x) => x.slug === s);
  const product = (slug) => PRODUCTS.find((p) => p.slug === slug);
  const productsIn = ({ room: r, group: g, sub: s } = {}) =>
    PRODUCTS.filter((p) => (!r || p.room === r) && (!g || p.group === g) && (!s || p.sub === s));
  const showroom = (k) => SHOWROOMS.find((s) => s.key === k);

  const ORIGIN = {
    made: { short: 'Made in Addis', long: 'Made in our Addis Ababa workshop' },
    imported: { short: 'Imported', long: 'Imported from partner manufacturers abroad, for materials and mechanisms we cannot source in Ethiopia' },
  };
  const priceInfo = (p) => {
    if (p.show && p.off) return { kind: 'sale', now: fmt(p.now), was: fmt(p.price), label: `−${p.off}%` };
    if (p.show) return { kind: 'price', now: fmt(p.price), was: '', label: '' };
    return { kind: 'request', now: 'Price on request', was: '', label: '' };
  };

  /* today's hours for the utility bar */
  const openNow = (s) => {
    const d = new Date();
    const h = d.getHours() + d.getMinutes() / 60;
    const [a, b] = d.getDay() === 0 ? s.sun : s.open;
    if (h >= a && h < b) return `Open today until ${b}:00`;
    if (h < a) return `Closed now, opens ${a}:00`;
    const [na] = d.getDay() === 6 ? s.sun : s.open;
    return `Closed now, opens tomorrow ${na}:00`;
  };

  /* ---------------------------------------------------------- quote list */
  const KEY = 'zef_quote_list_v1';
  const read = () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  };
  const write = (items, detail) => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {}
    window.dispatchEvent(new CustomEvent('zef:list', { detail }));
  };
  const list = {
    get: () => read().filter((i) => product(i.slug)),
    count: () => list.get().reduce((a, i) => a + (i.qty || 1), 0),
    has: (slug) => read().some((i) => i.slug === slug),
    add: (slug, opts = {}) => {
      const items = read();
      const p = product(slug);
      if (!p) return;
      const ex = items.find((i) => i.slug === slug);
      if (ex) ex.qty = (ex.qty || 1) + (opts.qty || 1);
      else items.push({ slug, qty: opts.qty || 1, finish: opts.finish || p.finishes[0], note: opts.note || '' });
      if (ex && opts.note && !ex.note) ex.note = opts.note;
      if (!opts.silent) write(items, { action: 'add', slug, name: p.name });
      else write(items, { action: 'set', slug });
    },
    set: (slug, patch) => {
      const items = read().map((i) => (i.slug === slug ? { ...i, ...patch, qty: Math.max(1, patch.qty ?? i.qty) } : i));
      write(items, { action: 'set', slug });
    },
    remove: (slug) => write(read().filter((i) => i.slug !== slug), { action: 'remove', slug }),
    clear: () => write([], { action: 'clear' }),
  };
  window.addEventListener('storage', (e) => {
    if (e.key === KEY) window.dispatchEvent(new CustomEvent('zef:list', { detail: { action: 'sync' } }));
  });

  /* ------------------------------------------------------------- ranking */
  const SYN = { couch: 'sofa', settee: 'sofa', closet: 'wardrobe', cupboard: 'wardrobe', light: 'lamp', lighting: 'lamp', seat: 'chair', seating: 'chair', shelf: 'bookcase', shelves: 'bookcase', bookshelf: 'bookcase', shelving: 'bookcase', wood: 'wanza', wooden: 'wanza', boardroom: 'conference', meeting: 'conference', hotel: 'hospitality', restaurant: 'hospitality', tv: 'media', cabinet: 'storage' };
  const stem = (w) => {
    w = w.toLowerCase();
    if (SYN[w]) return SYN[w];
    if (w.length > 4 && /(ches|shes|xes)$/.test(w)) return w.slice(0, -2);
    if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
    return w;
  };
  const hay = (s) => String(s || '').toLowerCase();
  const rank = (term) => {
    const q = term.trim().toLowerCase();
    if (!q) return [];
    const raw = q.split(/[\s,]+/).filter(Boolean);
    const toks = raw.map(stem);
    const qsku = q.replace(/[\s-]/g, '');
    const out = [];
    PRODUCTS.forEach((p) => {
      const R = ROOMS.find((r) => r.slug === p.room) || {};
      const G = (R.groups || []).find((g) => g.slug === p.group) || {};
      const S = (G.subs || []).find((x) => x.slug === p.sub) || {};
      const f = { name: hay(p.name), sku: hay(p.sku).replace('-', ''), sub: hay(S.name) + ' ' + hay(G.name) + ' ' + hay(G.h1), room: hay(R.name), mat: hay(p.materials) + ' ' + p.finishes.map((k) => hay(FINISHES[k][0])).join(' ') + ' ' + hay(p.uph) + (p.origin === 'imported' ? ' imported' : ' made local workshop addis'), desc: hay(p.desc) };
      let score = 0, missing = 0, meta = 0, phrase = false;
      const skuHit = f.sku === qsku ? 220 : qsku.length >= 3 && /\d/.test(qsku) && f.sku.includes(qsku) ? 120 : 0;
      score += skuHit;
      if (f.name.includes(q)) { score += f.name.startsWith(q) ? 100 : 80; phrase = true; }
      toks.forEach((t) => {
        const tk = t.replace('-', '');
        let hit = 0;
        if (skuHit && /\d/.test(tk) && f.sku.includes(tk)) hit = 20;
        else if (f.name.split(/[^a-z0-9é]+/).some((w) => w && (w.startsWith(t) || w.replace(/(es|s)$/, '') === t))) hit = 30;
        else if (f.sub.includes(t)) { hit = 18; meta++; }
        else if (f.room.includes(t)) { hit = 10; meta++; }
        else if (f.mat.includes(t)) { hit = 8; meta++; }
        else if (f.desc.includes(t)) { hit = 3; meta++; }
        if (!hit) missing++;
        score += hit;
      });
      if (missing === toks.length && !skuHit) return;
      if (missing) score *= 0.4;
      const tier = missing ? 3 : meta && !phrase && !skuHit ? 2 : 1;
      let at = -1, len = 0;
      [q, ...raw].some((w) => { const i = f.name.indexOf(w); if (i >= 0 && w.length > 1) { at = i; len = w.length; return true; } return false; });
      out.push({ p, score, tier, sale: !!(p.show && p.off), at, len });
    });
    return out.sort((a, b) => a.tier - b.tier || b.sale - a.sale || b.score - a.score);
  };

  /* ------------------------------------------------------------- search */
  const search = (term) => {
    const t = term.trim().toLowerCase();
    if (!t) return [];
    const out = [];
    ROOMS.forEach((r) => {
      if (r.name.toLowerCase().includes(t)) out.push({ type: 'Room', label: r.name, meta: 'Shop the room', href: href.room(r.slug) });
      r.groups.forEach((g) => {
        if (g.name.toLowerCase().includes(t) || g.h1.toLowerCase().includes(t)) out.push({ type: 'Group', label: g.h1, meta: r.name, href: href.group(r.slug, g.slug) });
        g.subs.forEach((s) => {
          if (s.name.toLowerCase().includes(t)) out.push({ type: 'Category', label: s.name, meta: r.name, href: href.sub(r.slug, g.slug, s.slug) });
        });
      });
    });
    const cats = out.slice(0, 3);
    const prods = rank(term).slice(0, 8 - cats.length).map(({ p, sale }) => ({ type: sale ? 'On sale' : 'Product', label: p.name, meta: sale ? priceInfo(p).now : p.sku, href: href.product(p.slug), img: img(p.img, 160) }));
    return [...prods.slice(0, 2), ...cats, ...prods.slice(2)].slice(0, 8);
  };


  /* --------------------------------------------------------------- sets */
  // fixed: matched pieces sold together, cannot be swapped. build: pick a piece per slot, skip optional slots.
  const SETS = [
    { slug: 'executive-office-set', kind: 'fixed', room: 'office', series: 'kality-workspace', name: 'Executive office set', img: '1497366811353-6870744d04b2',
      blurb: 'A director’s office in one order: desk, high-back chair and two guest chairs in matching finishes.',
      items: [['axum-executive-desk', 1], ['executive-mesh-chair-high-back', 1], ['guest-chair-with-arms', 2]] },
    { slug: 'executive-suite-reception', kind: 'fixed', room: 'office', series: 'kality-workspace', name: 'Executive suite with reception', img: '1600508773950-d522f5bb7606',
      blurb: 'The executive office set plus a reception desk and waiting bench for the front of the suite.',
      items: [['axum-executive-desk', 1], ['kality-leather-executive-chair', 1], ['guest-chair-with-arms', 2], ['axum-reception-desk', 1], ['two-seat-waiting-bench', 1]] },
    { slug: 'open-plan-team', kind: 'fixed', room: 'office', series: 'kality-workspace', name: 'Open-plan team set', img: '1497366216548-37526070297c',
      blurb: 'Desks, task chairs and a shared meeting table for a team of six, delivered and installed together.',
      items: [['two-person-desk', 3], ['kality-task-chair', 6], ['modular-conference-table', 1], ['cantilever-meeting-chair', 4]] },
    { slug: 'hotel-guest-room', kind: 'fixed', room: 'hospitality', series: 'hotel', name: 'Hotel guest-room set', img: '1631049307264-da0ec9d70304',
      blurb: 'Bed, nightstands, wardrobe and a chair for one guest room, repeated across every room in the order.',
      items: [['sodere-guest-room-bed', 1], ['zeway-nightstand', 2], ['bahir-wardrobe', 1], ['lalibela-accent-chair', 1]] },
    { slug: 'sheger-living-room', kind: 'build', room: 'living-room', series: 'sheger-living', name: 'Sheger living room', img: '1618221195710-dd6b41faaea6',
      blurb: 'Start with a sofa, then choose the chairs, tables and lighting you want. Skip anything you already have.',
      slots: [['Sofa', true, ['sheger-3-seat-sofa', 'arba-leather-sofa', 'wenchi-velvet-sofa'], 1, 1], ['Armchairs', false, ['bale-armchair', 'entoto-lounge-chair', 'lalibela-accent-chair'], 2, 4], ['Coffee table', false, ['tana-coffee-table'], 1, 1], ['Side table', false, ['harar-side-table'], 1, 2], ['Media unit', false, ['awash-media-console'], 1, 1], ['Lighting', false, ['omo-floor-lamp'], 1, 2]] },
    { slug: 'abay-bedroom', kind: 'build', room: 'bedroom', series: 'wanza', name: 'Abay bedroom', img: '1505693416388-ac5ce068fe85',
      blurb: 'Choose the bed, then add nightstands, a dresser or a wardrobe in the same wood.',
      slots: [['Bed', true, ['abay-upholstered-bed', 'dire-platform-bed', 'ras-king-bed'], 1, 1], ['Nightstands', false, ['zeway-nightstand'], 2, 2], ['Dresser', false, ['tis-dresser'], 1, 1], ['Wardrobe', false, ['bahir-wardrobe'], 1, 2]] },
    { slug: 'gondar-dining', kind: 'build', room: 'dining', series: 'wanza', name: 'Gondar dining set', img: '1617806118233-18e1de247200',
      blurb: 'Pick a table size, choose how many chairs, and add a bench or counter stools if you want them.',
      slots: [['Table', true, ['arsi-round-table', 'sidamo-dining-table', 'fasil-dining-table'], 1, 1], ['Chairs', true, ['gondar-dining-chair'], 6, 12], ['Bench', false, ['debre-dining-bench'], 1, 2], ['Counter stools', false, ['adwa-counter-stool'], 2, 6]] },
    { slug: 'kitchen-set', kind: 'build', room: 'kitchen', series: '', name: 'Made-to-measure kitchen', img: 'ph:Kitchen set',
      blurb: 'Choose the units you need. We measure your kitchen and send a drawing before anything is built.',
      slots: [['Base cabinets with drawers', true, ['base-cabinet-three-drawers'], 2, 8], ['Base cabinets with doors', false, ['base-cabinet-two-doors'], 2, 8], ['Wall cabinets', false, ['wall-cabinet'], 3, 10], ['Pantry', false, ['tall-pantry-unit'], 1, 3]] },
  ];

  /* --------------------------------------------------------- editorial */
  const AUTHOR = { by: 'Zefmesh design team', review: 'Reviewed by the Zefmesh production manager' };
  const ARTICLES = [
    { slug: 'compact-addis-apartment', type: 'Room ideas', time: '6 min', date: '12 September 2026', title: 'How to furnish a compact Addis apartment living room', img: '1583847268964-b28dc8f51f92', room: 'living-room',
      sum: 'Choose one generous sofa instead of a full suite, store upwards rather than outwards, and light the room in layers. A small living room feels larger when the floor stays clear and the walls do the work.',
      body: [
        ['Start with one generous piece', 'In a living room under about 20 square metres, one deep sofa does more than a sofa and two armchairs. A 3-seat sofa around 220 cm wide seats a family and still leaves a clear path. Put it against the longest wall and keep the space in front of it open.', ['sheger-3-seat-sofa']],
        ['Storage that doubles as display', 'A tall, narrow bookcase uses height instead of floor. Keep the bottom closed for things you do not want on show and use the open shelves for books and a few objects. A low media console under the TV keeps cables out of sight.', ['simien-bookshelf', 'awash-media-console']],
        ['Light in layers', 'Overhead light flattens a small room. Add a floor lamp beside the sofa and a table lamp on a side table, and the room reads larger in the evening.', ['omo-floor-lamp', 'harar-side-table']],
      ] },
    { slug: 'open-plan-office', type: 'Office planning', time: '5 min', date: '18 July 2026', title: 'Planning an open-plan office: a desk-per-person guide', img: '1497366216548-37526070297c', room: 'office',
      sum: 'Most people need a 140 cm desk, an adjustable task chair and about 1.5 m of space behind them. Add a small meeting table for every group of desks and a larger table where teams meet clients.',
      body: [
        ['Desk size and spacing', 'A 140 cm desk suits a laptop and one monitor. Allow about 1.5 m behind each desk so chairs can move without hitting the next row, and keep main walkways at least 1.2 m wide.', ['straight-office-desk-140', 'two-person-desk']],
        ['Seating for the whole day', 'Choose task chairs with seat-depth and lumbar adjustment for anyone who sits for more than four hours. Visitor and meeting chairs can be simpler and lighter.', ['kality-task-chair', 'ergonomic-task-chair-headrest']],
        ['Meeting space', 'Plan small meeting tables close to the desks so short conversations do not take over a boardroom. Modular tables can be rearranged for training days.', ['modular-conference-table', 'oval-conference-table-8-seat']],
      ] },
    { slug: 'solid-wood-dry-season', type: 'Care', time: '4 min', date: '28 August 2026', title: 'Caring for solid wood in the dry season', img: '1611486212557-88be5ff6f941', room: 'dining',
      sum: 'Solid wanza shrinks slightly in Bega and swells in Kiremt. Keep it out of direct sun, wipe spills quickly and re-oil it twice a year so the surface stays sealed.',
      body: [
        ['Why wood moves', 'Wood takes in and gives off moisture with the air around it. Our tables are built with joints that allow for this, but very dry air near a window or heater speeds it up.', ['fasil-dining-table']],
        ['A ten-minute routine', 'Dust weekly with a dry cloth. Twice a year, clean with a barely damp cloth, let it dry, then rub in a thin coat of furniture oil and buff off the excess after twenty minutes.', ['tana-coffee-table']],
        ['When to call us', 'If a crack opens along a joint or a top starts to cup, send a photo on WhatsApp. Most issues can be fixed in our workshop.', []],
      ] },
    { slug: 'hotel-lobbies', type: 'Projects', time: '5 min', date: '2 July 2026', title: 'Hotel lobbies that feel like living rooms', img: '1587702068694-a909ef4aa346', room: 'hospitality',
      sum: 'Group seating in small clusters, use contract-grade fabric in warm colours, and mix sofas with single chairs. Guests stay longer in a lobby that feels like a living room.',
      body: [
        ['Clusters, not rows', 'A sofa, two chairs and a low table form a group of four or five. Several groups spread through a lobby let guests sit apart without feeling exposed.', ['langano-lobby-sofa']],
        ['Fabric that lasts', 'Lobby seating is used all day. Contract-grade fabric and fire-retardant foam keep their shape, and darker warm colours hide wear between cleans.', []],
      ] },
    { slug: 'family-sofa-fabric', type: 'Room ideas', time: '3 min', date: '30 July 2026', title: 'Choosing fabric for a family sofa', img: '1618220179428-22790b461013', room: 'living-room',
      sum: 'Pick a tightly woven fabric with removable covers. Textured weaves such as boucle hide marks, performance velvet resists stains, and leather wipes clean but scratches.',
      body: [
        ['Covers that come off', 'Removable covers matter more than any fabric. Most Zefmesh sofa covers zip off for cleaning.', ['sheger-3-seat-sofa']],
        ['Texture hides wear', 'A textured weave such as olive boucle forgives crumbs and paw prints. Flat linens show marks sooner but feel cooler.', ['bale-armchair', 'wenchi-velvet-sofa']],
      ] },
    { slug: 'gena-2026-lookbook', type: 'News', time: '4 min', date: '2 September 2026', title: 'The Gena 2026 edit: one warm palette across five rooms', img: '1664711942326-2c3351e215e6', room: 'living-room',
      sum: 'Oxblood, oat and walnut run through this season’s living room, bedroom and dining pieces. Sale prices on the edit are held on quotes until 7 January.',
      body: [
        ['The palette', 'Oxblood upholstery, oat linen and walnut veneer work together in any room. Mix two of the three rather than all three in one space.', ['wenchi-velvet-sofa', 'walnut-executive-desk']],
        ['On sale until 7 January', 'Pieces in the edit show their sale price. Add them to your quote list and the price is held when you send it.', ['bale-armchair', 'abay-upholstered-bed']],
      ] },
  ];
  const GUIDE_BODY = {
    'how-to-choose-an-office-chair': {
      answer: 'For eight-hour desk work, choose a task chair with seat-depth and lumbar adjustment and a mesh back. For managers’ offices and boardrooms, an executive chair in leather or mesh with a synchro-tilt mechanism. Check the seat height range and weight rating before ordering in bulk.',
      sections: [
        ['Mesh or leather', 'Mesh suits most desks; leather suits rooms where the chair is part of the impression you make.', [['', 'Mesh', 'Leather'], ['In warm rooms', 'Stays cool', 'Warms up'], ['Care', 'Vacuum monthly', 'Wipe, condition twice a year'], ['Look', 'Light, modern', 'Formal'], ['Best for', 'Open-plan, long days', 'Managers, boardrooms']], 'Choose mesh for most desks and leather for managers’ offices and boardrooms.'],
        ['Back height', 'A high back with a headrest suits people who lean back on calls. A mid back sits below partitions and windows. A low back keeps sight lines clear around a meeting table.', [['', 'High back', 'Mid back', 'Low back'], ['Support', 'Head and shoulders', 'Shoulders', 'Lower back'], ['Typical room', 'Private office', 'Open-plan', 'Meeting room']], 'Mid back for open-plan rows, high back for long calls, low back for meetings.'],
        ['Adjustments that matter', 'Seat height, seat depth and lumbar support make the biggest difference over a full day. Arm height and tilt tension come next.', null, ''],
      ],
      picks: [['Long days at a desk', 'office', 'seating', 'task-chairs'], ['Managers and directors', 'office', 'seating', 'executive-chairs'], ['Meeting rooms', 'office', 'seating', 'conference-chairs'], ['Reception and waiting', 'office', 'seating', 'guest-chairs']],
      faq: [['What weight can your chairs take?', 'Executive and task chairs are rated to at least 120 kg. The rating is listed in each product’s specifications.'], ['Can we try chairs before ordering 50?', 'Yes. Office seating is on display at both showrooms, and we can bring samples to your office for larger orders.']] },
    'l-shape-or-straight-desk': {
      answer: 'A straight desk of 140 cm suits most people and fits in rows. Choose an L-shape when someone works with two monitors and paper, or in a private office where the return can hold a printer and files.',
      sections: [
        ['Floor space', 'An L-shape needs about twice the floor area of a straight desk, so it suits private offices more than open-plan rows.', [['', 'Straight', 'L-shape'], ['Typical size', '140 × 70 cm', '160 × 140 cm'], ['Suits', 'Laptop and one monitor', 'Two monitors and paper'], ['Room', 'Open-plan rows', 'Private offices']], 'Straight desks for teams, L-shapes for supervisors and managers.'],
        ['Cables and storage', 'Both types come with cable trays. A mobile pedestal under a straight desk adds drawers without taking more floor.', null, ''],
      ],
      picks: [['Open-plan teams', 'office', 'desks-tables', 'office-desks'], ['Managers’ offices', 'office', 'desks-tables', 'executive-desks']],
      faq: [['Can you make a desk to fit our room?', 'Yes. Send the measurements with your request and we confirm the size and price.']] },
    'mdf-or-solid-wood': {
      answer: 'Solid wood lasts longest and can be sanded and repaired, but it moves slightly with the seasons. MDF with melamine or veneer is stable and lower in cost, and suits office desks and storage that will be replaced on a shorter cycle.',
      sections: [
        ['How they compare', 'Both are used in Zefmesh furniture. The choice depends on how long the piece needs to last and how it will be used.', [['', 'Solid wanza', 'MDF and melamine'], ['Lifespan', 'Decades', 'Several years'], ['Repairs', 'Sand and re-oil', 'Replace damaged panels'], ['Dry season', 'Moves slightly', 'Stable'], ['Cost', 'Higher', 'Lower']], 'Solid wood for dining tables and pieces you keep; MDF for office desks and storage in bulk.'],
      ],
      picks: [['Solid wood tables', 'dining', 'tables', '6-seat'], ['Living room storage', 'living-room', 'storage', 'tv-units'], ['Office desks', 'office', 'desks-tables', 'office-desks']],
      faq: [['Is wanza a hardwood?', 'Yes. Wanza (Cordia africana) is a highland hardwood with a honey colour that darkens with age.']] },
    'choosing-a-family-sofa': {
      answer: 'Choose a sofa with zip-off covers in a tightly woven or textured fabric. Performance velvet resists stains, boucle hides marks, linen feels cool but shows wear sooner, and leather wipes clean but scratches.',
      sections: [
        ['Fabric by household', 'Every fabric below is available on Zefmesh sofas. You can also send your own.', [['', 'Linen', 'Velvet', 'Leather'], ['Children and pets', 'Fair', 'Good', 'Scratches show'], ['Cleaning', 'Covers wash', 'Wipe, covers dry-clean', 'Wipe'], ['Feel', 'Cool', 'Soft', 'Firm, warms up']], 'Performance velvet or boucle for busy homes; leather where there are no pets.'],
      ],
      picks: [['3-seat sofas', 'living-room', 'sofas-chairs', '3-seat-sofas'], ['Armchairs', 'living-room', 'sofas-chairs', 'armchairs']],
      faq: [['Can I see the fabrics?', 'Yes. The full fabric library is at the Grand Mall showroom.']] },
  };
  const HELP = [
    ['Ordering and quotes', [
      ['How does ordering work?', 'Add pieces to your quote list from anywhere on the site and send it as one request. A consultant replies within one working day with prices, any discount and a delivery or pick-up date.'],
      ['Can I pay online?', 'Not yet. Once you accept the quote you pay at a showroom, by bank transfer or on delivery.'],
      ['How long is a quote valid?', 'Quotes are valid for 14 days. Sale prices are held until the end of the offer shown on your quote.'],
      ['Can I change my list after sending it?', 'Yes. Reply to your quote or message your consultant and they reissue it.']]],
    ['Delivery and assembly', [
      ['Where do you deliver?', 'Everywhere in Addis Ababa, and to regional cities by arrangement. The delivery fee is confirmed in your quote.'],
      ['Is assembly included?', 'Yes. Our team carries pieces in, assembles them and takes the packaging away.'],
      ['How long does delivery take?', 'In-stock pieces arrive within three to five working days in Addis Ababa. Made-to-order lead times are shown on each product.'],
      ['Can I collect it myself?', 'Yes. Choose pick-up when you send your request and we confirm a time at the showroom or workshop.']]],
    ['Payment and invoices', [
      ['Which payment methods do you accept?', 'Bank transfer, Telebirr and card at the showroom. Business orders can pay against an invoice with an agreed deposit.'],
      ['Do you issue VAT invoices?', 'Yes, for every order.']]],
    ['Business and bulk', [
      ['When does bulk pricing start?', 'From 10 units of one piece. Send the full list as one request.'],
      ['Do you respond to tenders?', 'Yes. Send the tender document to sales@zefmesh.com and we reply with samples and a compliant bid.'],
      ['Can you install after hours?', 'Yes. Night and weekend installation is available.']]],
    ['Custom and branding', [
      ['Which branding methods do you offer?', 'Embroidery, debossed leather, laser engraving on wood and printed fabric in your colours.'],
      ['What is the minimum?', 'Custom sizes start at a single piece. Branded pieces start at 20 units.']]],
    ['Care and repairs', [
      ['How do I care for solid wood?', 'Dust weekly, wipe spills quickly and re-oil twice a year, more often in the dry season.'],
      ['What if something breaks?', 'Send a photo on WhatsApp with your order reference. Workmanship faults are repaired by our team; terms are listed on your quote.']]],
  ];
  const COLL_PIECES = {
    'gena-2026': ['bale-armchair', 'sheger-3-seat-sofa', 'wenchi-velvet-sofa', 'kality-leather-executive-chair', 'abay-upholstered-bed', 'harar-side-table', 'awash-media-console'],
    wanza: ['tana-coffee-table', 'harar-side-table', 'koka-console-table', 'awash-media-console', 'simien-bookshelf', 'zeway-nightstand', 'tis-dresser', 'fasil-dining-table', 'gondar-dining-chair'],
    'sheger-living': ['sheger-3-seat-sofa', 'arba-leather-sofa', 'wenchi-velvet-sofa', 'entoto-lounge-chair', 'bale-armchair', 'lalibela-accent-chair', 'omo-floor-lamp'],
    'kality-workspace': ['executive-mesh-chair-high-back', 'kality-task-chair', 'axum-executive-desk', 'straight-office-desk-140', 'boardroom-table-10-seat', 'guest-chair-with-arms'],
    hotel: ['sodere-guest-room-bed', 'langano-lobby-sofa', 'cafe-table-70', 'gondar-dining-chair', 'adwa-counter-stool'],
  };
  const COLL_STORY = {
    'gena-2026': 'A seasonal edit in oxblood, oat and walnut across the living room, bedroom and office. Every piece in it shows its sale price until 7 January.',
    wanza: 'Tables, shelves and storage in solid wanza, the honey-coloured hardwood of the Ethiopian highlands. Each piece is cut, joined and oiled in our Kality workshop and darkens slowly with use.',
    'sheger-living': 'Deep sofas and lounge chairs on kiln-dried wanza frames, with covers that zip off for washing. Built for long evenings and big families.',
    'kality-workspace': 'Task seating, executive desks and boardroom tables designed to work together, so a whole floor can be ordered from one list and branded with your logo.',
    hotel: 'Contract-grade lobby, guest-room and restaurant furniture for hotels across Ethiopia, finished in your brand colours and installed by our team.',
  };
  window.ZEF = {
    img, fmt, ABOUT, CONTACT, SHOWROOMS, FINISHES, ROOMS, PRODUCTS, COLLECTIONS, SECTORS, PROJECTS, GUIDES, REVIEWS, PRODUCT_FAQ,
    href, isBuilt, BUILT, q, room, group, sub, product, productsIn, showroom, priceInfo, openNow, list, search, rank, subIntro, subGuide,
    AUTHOR, ARTICLES, GUIDE_BODY, HELP, COLL_PIECES, COLL_STORY, SETS, ORIGIN,
  };
  window.dispatchEvent(new CustomEvent('zef:ready'));
})();
